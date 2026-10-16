/** One tab of the live playground */
export interface LiveExample {
  id: string
  title: string
  /** Shown under the tabs; trusted HTML written by the docs authors */
  caption: string
  code: string
}
