/**
 * Stadtbibliothek OOP – Zugriffsmodifikatoren
 *
 * Musterlösung
 */

export class LibraryAccount {
  private borrowedBookIds: string[] = [];
  protected maxLoans: number = 5;

  constructor(
    public readonly memberNumber: number,
    public memberName: string,
  ) {}

  public borrow(bookId: string): void {
    if (this.borrowedBookIds.length >= this.maxLoans) {
      throw new Error("Ausleihlimit erreicht");
    }

    this.borrowedBookIds.push(bookId);
  }

  public returnBook(bookId: string): void {
    this.borrowedBookIds = this.borrowedBookIds.filter(id => id !== bookId);
  }

  public getBorrowedBookIds(): string[] {
    return [...this.borrowedBookIds];
  }
}

export class PremiumLibraryAccount extends LibraryAccount {
  constructor(memberNumber: number, memberName: string) {
    super(memberNumber, memberName);
    this.maxLoans = 10;
  }
}
