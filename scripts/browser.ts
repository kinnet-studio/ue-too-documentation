import { chromium, type Browser } from 'playwright'

/**
 * Launches headless Chromium for the live example checks. CHROMIUM_EXECUTABLE
 * points at a specific Chromium build; otherwise Playwright's own is used
 * (`bunx playwright install chromium`).
 */
export function launchBrowser(): Promise<Browser> {
  const executablePath = process.env.CHROMIUM_EXECUTABLE
  return chromium.launch(executablePath ? { executablePath } : {})
}
