export function formattedCurrency(value: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', // Change this to your desired currency code
  });

  if (!value) return '-';

  return formatter.format(value);
}
