/**
 * Stadtbibliothek OOP – die erste Klasse
 *
 * Musterlösung
 */

export class LibraryBook {
  public id: string = "";
  public title: string = "";
  public author: string = "";
  public available: boolean = true;

  public getLabel(): string {
    return `${this.title} von ${this.author}`;
  }
}

const book = new LibraryBook();
book.id = "b-1";
book.title = "Clean Code";
book.author = "Robert C. Martin";
console.log(book.getLabel() === "Clean Code von Robert C. Martin");
