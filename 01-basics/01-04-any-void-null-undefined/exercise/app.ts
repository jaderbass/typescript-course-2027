/**
 * Stadtbibliothek – optionale und fehlende Werte
 *
 * Aufgaben:
 * 1) Implementiere `findBookTitle()`:
 *    - sucht eine ISBN in der vorbereiteten Liste
 *    - gibt den Titel oder undefined zurück
 * 2) Implementiere `getReturnDateLabel()`:
 *    - bei einem Datum: "Rückgabe: <deutsches Datum>"
 *    - bei null: "Noch nicht zurückgegeben"
 * 3) Implementiere `printLoanMessage()`:
 *    - gibt eine Nachricht mit console.log() aus
 *    - wähle einen passenden Rückgabetyp
 * 4) Vermeide `any` in allen eigenen Deklarationen.
 */

const books = [
  { isbn: "111", title: "TypeScript kompakt" },
  { isbn: "222", title: "JavaScript verstehen" },
];

export function findBookTitle(isbn: string): string | undefined {
  // TODO
  return undefined;
}

export function getReturnDateLabel(returnedAt: Date | null): string {
  // TODO
  return "";
}

export function printLoanMessage(message: string): void {
  // TODO
}

console.log(findBookTitle("222") === "JavaScript verstehen");
console.log(findBookTitle("999") === undefined);
console.log(getReturnDateLabel(null) === "Noch nicht zurückgegeben");
