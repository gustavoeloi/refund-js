export function formartCurrency(value: number): string {
  const currency = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return currency.format(value).replace("R$", "");
}
