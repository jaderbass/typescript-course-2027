/**
 * Stadtbibliothek – Bücher als Objekte
 *
 * Musterlösung
 */

export type Book = {
  isbn: string;
  title: string;
  author: string;
  available: boolean;
  keywords?: string[];
};

export function bookLabel(book: Book): string {
  const status = book.available ? "verfügbar" : "ausgeliehen";
  return `${book.title} – ${book.author} [${status}]`;
}

export function borrowBook(book: Book): Book {
  return { ...book, available: false };
}

export function addKeyword(book: Book, keyword: string): Book {
  const keywords = book.keywords ?? [];
  return {
    ...book,
    keywords: keywords.includes(keyword) ? keywords : [...keywords, keyword],
  };
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
