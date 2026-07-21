/**
 * Stadtbibliothek OOP – statische Eigenschaften und Methoden
 *
 * Aufgaben:
 * Erstelle die Klasse `CatalogNumberFactory`.
 *
 * Anforderungen:
 * - privater statischer Zähler, Startwert 1
 * - `next(prefix = "MED")` erzeugt "MED-1", "MED-2" usw.
 * - `reset()` setzt den Zähler wieder auf 1
 * - es sollen keine Instanzen der Klasse benötigt werden
 */

export class CatalogNumberFactory {
  private static counter: number = 1;

  public static next(prefix: string = "MED"): string {
    // TODO
    return "";
  }

  public static reset(): void {
    // TODO
  }
}

CatalogNumberFactory.reset();
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-1");
console.log(CatalogNumberFactory.next("BOOK") === "BOOK-2");
