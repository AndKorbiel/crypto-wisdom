export function formatNumber(number: number) {
  return Math.round(number * 100) / 100;
}

export function formatPriceToCurrency(price: number) {
  const fixedPrice = formatNumber(price);

  return `$ ${fixedPrice}`;
}
