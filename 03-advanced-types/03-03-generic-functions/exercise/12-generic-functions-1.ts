/**
 * Stadtbibliothek – wiederverwendbare Hilfsfunktionen
 *
 * Aufgaben:
 * 1) Implementiere die generische Funktion `first()`:
 *    - gibt das erste Element oder undefined zurück
 * 2) Implementiere die generische Funktion `last()`:
 *    - gibt das letzte Element oder undefined zurück
 * 3) Implementiere `mapItems<T, R>()`:
 *    - erhält ein Array und eine Umwandlungsfunktion
 *    - gibt ein Array des neuen Typs zurück
 */

export function first(items: unknown) {
  // TODO: Signatur und Implementierung anpassen
  return undefined;
}

export function last(items: unknown) {
  // TODO: Signatur und Implementierung anpassen
  return undefined;
}

export function mapItems<T, R>(items: T[], transform: (item: T) => R): R[] {
  // TODO
  return [];
}

const bookTitles = ["Clean Code", "TypeScript kompakt"];
console.log(first(bookTitles) === "Clean Code");
console.log(last(bookTitles) === "TypeScript kompakt");
console.log(mapItems(bookTitles, title => title.length).join(",") === "10,18");
