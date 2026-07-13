/**
 * Stadtbibliothek – Gebühren einlesen
 *
 * Musterlösung
 */

export function parseFee(rawFee: string): number {
  const normalizedFee = rawFee.trim().replace("€", "").trim().replace(",", ".");
  const fee = Number(normalizedFee);

  if (Number.isNaN(fee)) {
    throw new Error("Ungültige Gebührenangabe");
  }

  return fee;
}

export function calculateTotalFee(feePerDay: number, overdueDays: number): number {
  return feePerDay * overdueDays;
}

export function formatFee(amount: number): string {
  return `${amount.toFixed(2)} €`;
}

console.log(parseFee(" 0,25 € ") === 0.25);
console.log(calculateTotalFee(0.25, 15) === 3.75);
console.log(formatFee(3.75) === "3.75 €");
