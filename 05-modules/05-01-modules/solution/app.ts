/**
 * Stadtbibliothek – Module
 *
 * Musterlösung
 */

import type { Book, Member } from "./22-modules-1-models";
import { borrowBook } from "./22-modules-2-library-service";

const book: Book = {
  id: "b-1",
  title: "Clean Code",
  author: "Robert C. Martin",
  available: true,
};

const member: Member = {
  memberNumber: 1042,
  name: "Mia Sommer",
  active: true,
};

const borrowedBook = borrowBook(book, member);
console.log(borrowedBook);
