/**
 * Stadtbibliothek – Module
 *
 * Musterlösung
 */

import type { Book, Member } from "./22-modules-1-models";

export function borrowBook(book: Book, member: Member): Book {
  if (!member.active) {
    throw new Error("Mitglied ist nicht aktiv");
  }

  if (!book.available) {
    throw new Error("Buch ist nicht verfügbar");
  }

  return { ...book, available: false };
}
