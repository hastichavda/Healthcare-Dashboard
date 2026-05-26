const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function sortChronologically(entries) {
  return [...entries].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)
  })
}

export function shortMonth(month) {
  return month ? month.slice(0, 3) : ''
}
