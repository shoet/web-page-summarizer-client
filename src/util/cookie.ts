export const parseCookie = (cookie: string): Map<string, string> => {
  const m = new Map<string, string>()
  cookie.split(';').forEach((c) => {
    const [key, value] = c.split('=')
    m.set(key, value)
  })
  return m
}
