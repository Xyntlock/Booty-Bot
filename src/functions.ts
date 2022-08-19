export function capitalise(s: string) {
  return s[0].toUpperCase() + s.substring(1)
}

export function sleep(duration: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, duration * 1000)
  })
}
