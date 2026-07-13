/**
 * Stadtbibliothek – verschiedene Medien
 *
 * Musterlösung
 */

export interface LibraryItem {
  id: string;
  title: string;
  available: boolean;
}

export interface BookItem extends LibraryItem {
  author: string;
  isbn: string;
}

export interface MovieItem extends LibraryItem {
  director: string;
  durationMinutes: number;
}

export function itemStatus(item: LibraryItem): string {
  return `${item.title}: ${item.available ? "verfügbar" : "ausgeliehen"}`;
}

export function bookDetails(book: BookItem): string {
  return `${book.title} von ${book.author} (ISBN ${book.isbn})`;
}
