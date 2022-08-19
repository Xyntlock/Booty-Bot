export function capitalise(s) {
  return s[0].toUpperCase() + s.substring(1)
}

export function sleep(duration) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, duration * 1000)
  })
}

module.exports = {
  capitalise,
  sleep,
}
