/**
 * Stadtbibliothek – unbekannte Importdaten prüfen
 *
 * Die Bibliothek erhält JSON-Daten aus einer externen Quelle. Nach JSON.parse()
 * kennen wir die tatsächliche Struktur zunächst nicht sicher.
 *
 * Aufgaben:
 * 1) Definiere den Typ `ImportedBook` mit title und isbn als string.
 * 2) Implementiere den User-defined Type Guard `isImportedBook()`.
 * 3) Implementiere `parseImportedBook()`:
 *    - JSON parsen
 *    - bei einem gültigen Buch den Datensatz zurückgeben
 *    - andernfalls einen Error werfen
 * 4) Bonus: Prüfe zusätzlich, dass title und isbn nicht leer sind.
 */

export type ImportedBook = {
  title: string;
  isbn: string;
};

export function isImportedBook(value: unknown): value is ImportedBook {
  // TODO
  return false;
}

export function parseImportedBook(json: string): ImportedBook {
  // TODO
  throw new Error("Noch nicht implementiert");
}

console.log(isImportedBook({ title: "Clean Code", isbn: "111" }) === true);
console.log(isImportedBook({ title: "Clean Code" }) === false);
