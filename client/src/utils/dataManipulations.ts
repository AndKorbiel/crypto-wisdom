export function formatNumber(number: number) {
  return Math.round(number * 100) / 100;
}

export function formatPriceToCurrency(price: number) {
  const fixedPrice = formatNumber(price);

  return `$ ${fixedPrice}`;
}

export function formatDate(date?: string) {
  if (!date) return 'N/A';

  return date.replace(/[T|^Z]/g, ' ').substring(0, date.length - 5);
}
