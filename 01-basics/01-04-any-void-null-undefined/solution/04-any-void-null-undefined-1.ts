/**
 * Stadtbibliothek – optionale und fehlende Werte
 *
 * Musterlösung
 */

const books = [
  { isbn: "111", title: "TypeScript kompakt" },
  { isbn: "222", title: "JavaScript verstehen" },
];

export function findBookTitle(isbn: string): string | undefined {
  return books.find(book => book.isbn === isbn)?.title;
}

export function getReturnDateLabel(returnedAt: Date | null): string {
  if (returnedAt === null) {
    return "Noch nicht zurückgegeben";
  }

  return `Rückgabe: ${returnedAt.toLocaleDateString("de-DE")}`;
}

export function printLoanMessage(message: string): void {
  console.log(message);
}

console.log(findBookTitle("222") === "JavaScript verstehen");
console.log(findBookTitle("999") === undefined);
console.log(getReturnDateLabel(null) === "Noch nicht zurückgegeben");
