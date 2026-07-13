/**
 * Stadtbibliothek OOP – Bücher komfortabel erzeugen
 *
 * Musterlösung
 */

export class LibraryBook {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public available: boolean = true,
  ) {}

  public getLabel(): string {
    return `${this.title} von ${this.author}`;
  }
}

const cleanCode = new LibraryBook("b-1", "Clean Code", "Robert C. Martin");
const unavailableBook = new LibraryBook("b-2", "1984", "George Orwell", false);
console.log(cleanCode.available === true);
console.log(unavailableBook.available === false);
