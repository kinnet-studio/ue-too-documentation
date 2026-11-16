import { describe, expect, test } from 'bun:test'
import { releaseUrls, waitForUrls } from './cdn-wait'

// A clock that only moves when the code under test sleeps
function fakeClock() {
  let time = 0
  const sleeps: number[] = []
  return {
    sleeps,
    now: () => time,
    sleep: async (ms: number) => {
      sleeps.push(ms)
      time += ms
    },
  }
}

// A fetch that answers from a table of URL → status, which a test can change between rounds
function fakeFetch(status: Record<string, number | 'throw'>) {
  const requested: string[] = []
  const fetch = async (url: string) => {
    requested.push(url)
    const answer = status[url] ?? 404
    if (answer === 'throw') throw new Error('network down')
    return new Response(null, { status: answer })
  }
  return { fetch, requested }
}

const quiet = () => {}

describe('releaseUrls', () => {
  test('lists the files every live example imports, for each release', () => {
    expect(releaseUrls(['0.21.0', '0.20.1'])).toEqual([
      'https://cdn.jsdelivr.net/npm/@ue-too/board@0.21.0/index.js',
      'https://cdn.jsdelivr.net/npm/@ue-too/math@0.21.0/index.js',
      'https://cdn.jsdelivr.net/npm/@ue-too/being@0.21.0/index.js',
      'https://cdn.jsdelivr.net/npm/@ue-too/board@0.20.1/index.js',
      'https://cdn.jsdelivr.net/npm/@ue-too/math@0.20.1/index.js',
      'https://cdn.jsdelivr.net/npm/@ue-too/being@0.20.1/index.js',
    ])
  })

  test('uses a custom CDN and lists a release once', () => {
    expect(releaseUrls(['0.21.0', '0.21.0'], 'http://localhost:4870')).toEqual([
      'http://localhost:4870/@ue-too/board@0.21.0/index.js',
      'http://localhost:4870/@ue-too/math@0.21.0/index.js',
      'http://localhost:4870/@ue-too/being@0.21.0/index.js',
    ])
  })
})

describe('waitForUrls', () => {
  const a = 'https://cdn.example/a.js'
  const b = 'https://cdn.example/b.js'

  test('returns at once when every file is there', async () => {
    const clock = fakeClock()
    const { fetch } = fakeFetch({ [a]: 200, [b]: 200 })
    const missing = await waitForUrls([a, b], { fetch, ...clock, timeout: 60_000, interval: 10_000, log: quiet })
    expect(missing).toEqual([])
    expect(clock.sleeps).toEqual([])
  })

  test('keeps asking for the missing files until they arrive', async () => {
    const clock = fakeClock()
    const status: Record<string, number> = { [a]: 200, [b]: 404 }
    const { fetch, requested } = fakeFetch(status)
    const sleep = async (ms: number) => {
      await clock.sleep(ms)
      if (clock.now() >= 20_000) status[b] = 200
    }
    const missing = await waitForUrls([a, b], { fetch, now: clock.now, sleep, timeout: 60_000, interval: 10_000, log: quiet })
    expect(missing).toEqual([])
    expect(clock.sleeps).toEqual([10_000, 10_000])
    // a was there the first time, so only b is asked for again
    expect(requested).toEqual([a, b, b, b])
  })

  test('counts a failed request as missing', async () => {
    const clock = fakeClock()
    const status: Record<string, number | 'throw'> = { [a]: 'throw' }
    const { fetch } = fakeFetch(status)
    const sleep = async (ms: number) => {
      await clock.sleep(ms)
      status[a] = 200
    }
    const missing = await waitForUrls([a], { fetch, now: clock.now, sleep, timeout: 60_000, interval: 10_000, log: quiet })
    expect(missing).toEqual([])
  })

  test('gives up after the timeout and returns what is still missing', async () => {
    const clock = fakeClock()
    const { fetch } = fakeFetch({ [a]: 200, [b]: 404 })
    const missing = await waitForUrls([a, b], { fetch, ...clock, timeout: 30_000, interval: 10_000, log: quiet })
    expect(missing).toEqual([b])
    expect(clock.now()).toBe(30_000)
  })
})
