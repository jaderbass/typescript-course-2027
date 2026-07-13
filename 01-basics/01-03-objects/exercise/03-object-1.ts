/**
 * Stadtbibliothek – Bücher als Objekte
 *
 * Aufgaben:
 * 1) Ergänze bzw. überprüfe den vorbereiteten Typ `Book`:
 *    - isbn: string
 *    - title: string
 *    - author: string
 *    - available: boolean
 *    - keywords?: string[]
 * 2) Implementiere `bookLabel()`:
 *    - Ausgabe: "Clean Code – Robert C. Martin [verfügbar]"
 * 3) Implementiere `borrowBook()`:
 *    - gibt ein neues Objekt mit available: false zurück
 *    - das übergebene Objekt darf nicht verändert werden
 * 4) Implementiere `addKeyword()`:
 *    - immutable
 *    - doppelte Schlagwörter vermeiden
 */

export type Book = {
  isbn: string;
  title: string;
  author: string;
  available: boolean;
  keywords?: string[];
};

export function bookLabel(book: Book): string {
  // TODO
  return "";
}

export function borrowBook(book: Book): Book {
  // TODO
  return book;
}

export function addKeyword(book: Book, keyword: string): Book {
  // TODO
  return book;
}

const book: Book = {
  isbn: "978-0-13-235088-4",
  title: "Clean Code",
  author: "Robert C. Martin",
  available: true,
};

console.log(bookLabel(book) === "Clean Code – Robert C. Martin [verfügbar]");
console.log(borrowBook(book).available === false);
console.log(book.available === true);
console.log(addKeyword(book, "Programmierung").keywords?.length === 1);
