/**
 * Stadtbibliothek OOP – generische Sammlung
 *
 * Musterlösung
 */

export class Repository<T> {
  private items: T[] = [];

  public add(item: T): void {
    this.items.push(item);
  }

  public getAll(): T[] {
    return [...this.items];
  }

  public find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  public remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(item => !predicate(item));
  }
}

const books = new Repository<{ id: string; title: string }>();
books.add({ id: "b-1", title: "Clean Code" });
console.log(books.find(book => book.id === "b-1")?.title === "Clean Code");

const members = new Repository<{ memberNumber: number; name: string }>();
members.add({ memberNumber: 1042, name: "Mia Sommer" });
console.log(members.getAll().length === 1);
