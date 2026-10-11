export function formatNumber(value: number, maximumFractionDigits = 3): string {
  return new Intl.NumberFormat('ar-EG', {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value)
}
