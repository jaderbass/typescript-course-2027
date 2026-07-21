/**
 * Stadtbibliothek OOP – statische Eigenschaften und Methoden
 *
 * Musterlösung
 */

export class CatalogNumberFactory {
  private static counter: number = 1;

  public static next(prefix: string = "MED"): string {
    return `${prefix}-${this.counter++}`;
  }

  public static reset(): void {
    this.counter = 1;
  }
}

CatalogNumberFactory.reset();
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-1");
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-2");
