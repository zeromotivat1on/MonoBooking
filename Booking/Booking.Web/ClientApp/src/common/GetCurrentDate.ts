// Return current Date in YYYY-MM-DD format
export default function getCurrentDate(): string {
  let date = new Date()
  const dateOffset = date.getTimezoneOffset()
  date = new Date(date.getTime() - (dateOffset * 60 * 1000))
  return date.toISOString().split('T')[0]
}