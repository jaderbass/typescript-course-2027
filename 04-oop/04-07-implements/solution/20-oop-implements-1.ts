/**
 * Stadtbibliothek OOP – gemeinsame Fähigkeiten
 *
 * Musterlösung
 */

export interface Borrowable {
  readonly available: boolean;
  borrow(): void;
  returnItem(): void;
}

export class Book implements Borrowable {
  private _available: boolean = true;

  constructor(public title: string, public author: string) {}

  public get available(): boolean {
    return this._available;
  }

  public borrow(): void {
    if (!this._available) {
      throw new Error("Buch ist bereits ausgeliehen");
    }
    this._available = false;
  }

  public returnItem(): void {
    this._available = true;
  }
}

export class Movie implements Borrowable {
  private _available: boolean = true;

  constructor(public title: string, public director: string) {}

  public get available(): boolean {
    return this._available;
  }

  public borrow(): void {
    if (!this._available) {
      throw new Error("Film ist bereits ausgeliehen");
    }
    this._available = false;
  }

  public returnItem(): void {
    this._available = true;
  }
}
