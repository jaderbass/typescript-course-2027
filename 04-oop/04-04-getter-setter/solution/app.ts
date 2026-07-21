/**
 * Stadtbibliothek OOP – Getter und Setter
 *
 * Musterlösung
 */

export class Loan {
  private _dueAt: Date;

  constructor(
    public readonly borrowedAt: Date,
    dueAt: Date,
  ) {
    this._dueAt = borrowedAt;
    this.dueAt = dueAt;
  }

  public get dueAt(): Date {
    return this._dueAt;
  }

  public set dueAt(value: Date) {
    if (value.getTime() < this.borrowedAt.getTime()) {
      throw new Error("Rückgabedatum darf nicht vor dem Ausleihdatum liegen");
    }

    this._dueAt = value;
  }

  public get isOverdue(): boolean {
    return new Date().getTime() > this._dueAt.getTime();
  }

  public get loanPeriodDays(): number {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((this._dueAt.getTime() - this.borrowedAt.getTime()) / millisecondsPerDay);
  }
}
