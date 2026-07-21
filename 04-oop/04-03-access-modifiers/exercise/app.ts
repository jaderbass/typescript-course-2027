/**
 * Stadtbibliothek OOP – Zugriffsmodifikatoren
 *
 * Aufgaben:
 * 1) Erstelle `LibraryAccount`:
 *    - memberNumber: readonly und public
 *    - memberName: public
 *    - borrowedBookIds: private string[]
 *    - maxLoans: protected number
 * 2) Implementiere `borrow(bookId)`:
 *    - wirft einen Error, wenn das Ausleihlimit erreicht ist
 * 3) Implementiere `returnBook(bookId)`.
 * 4) Implementiere `getBorrowedBookIds()`:
 *    - gib eine Kopie des Arrays zurück
 * 5) Erstelle `PremiumLibraryAccount`, das maxLoans auf 10 setzt.
 */

export class LibraryAccount {
  // TODO
}

export class PremiumLibraryAccount extends LibraryAccount {
  // TODO
}
