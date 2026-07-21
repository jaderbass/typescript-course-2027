/**
 * Stadtbibliothek – verschiedene Medien
 *
 * Aufgaben:
 * 1) Definiere `LibraryItem` mit:
 *    - id, title und available
 * 2) Definiere `BookItem`, das `LibraryItem` erweitert:
 *    - author und isbn
 * 3) Definiere `MovieItem`, das `LibraryItem` erweitert:
 *    - director und durationMinutes
 * 4) Implementiere `itemStatus()` für ein LibraryItem.
 * 5) Implementiere `bookDetails()` für ein BookItem.
 */

export interface LibraryItem {
  // TODO
}

export interface BookItem extends LibraryItem {
  // TODO
}

export interface MovieItem extends LibraryItem {
  // TODO
}

export function itemStatus(item: LibraryItem): string {
  // TODO
  return "";
}

export function bookDetails(book: BookItem): string {
  // TODO
  return "";
}
