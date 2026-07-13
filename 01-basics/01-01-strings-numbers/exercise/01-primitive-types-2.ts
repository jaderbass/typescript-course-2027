/**
 * Stadtbibliothek – Gebühren einlesen
 *
 * Aufgaben:
 * 1) Implementiere `parseFee()`:
 *    - akzeptiert z. B. "2.50", "2,50" und " 2,50 € "
 *    - gibt den Betrag als number zurück
 *    - wirft bei einer ungültigen Eingabe einen Error
 * 2) Implementiere `calculateTotalFee()`:
 *    - multipliziert die Tagesgebühr mit der Zahl verspäteter Tage
 * 3) Implementiere `formatFee()`:
 *    - Ausgabe mit zwei Nachkommastellen und Eurozeichen, z. B. "3.75 €"
 */

export function parseFee(rawFee: string): number {
  // TODO
  return 0;
}

export function calculateTotalFee(feePerDay: number, overdueDays: number): number {
  // TODO
  return 0;
}

export function formatFee(amount: number): string {
  // TODO
  return "";
}

console.log(parseFee(" 0,25 € ") === 0.25);
console.log(calculateTotalFee(0.25, 15) === 3.75);
console.log(formatFee(3.75) === "3.75 €");
