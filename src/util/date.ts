export function dateStrFromTimestamp(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleString()
}
