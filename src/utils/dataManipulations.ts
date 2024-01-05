export function formatNumber(number: number) {
  return number.toFixed(2);
}

export function formatPriceToCurrency(price: number) {
  const fixedPrice = formatNumber(price);

  return `$ ${fixedPrice}`;
}
