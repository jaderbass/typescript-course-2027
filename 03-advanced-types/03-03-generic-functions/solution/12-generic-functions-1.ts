/**
 * Stadtbibliothek – wiederverwendbare Hilfsfunktionen
 *
 * Musterlösung
 */

export function first<T>(items: T[]): T | undefined {
  return items[0];
}

export function last<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

export function mapItems<T, R>(items: T[], transform: (item: T) => R): R[] {
  return items.map(transform);
}

const bookTitles = ["Clean Code", "TypeScript kompakt"];
console.log(first(bookTitles) === "Clean Code");
console.log(last(bookTitles) === "TypeScript kompakt");
console.log(mapItems(bookTitles, title => title.length).join(",") === "10,18");
