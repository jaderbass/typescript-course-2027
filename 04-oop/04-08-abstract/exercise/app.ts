/**
 * Stadtbibliothek OOP – abstrakte Basisklasse
 *
 * Aufgaben:
 * 1) Erstelle die abstrakte Klasse `Media`:
 *    - id und title im Constructor
 *    - abstrakte Methode `getLoanPeriodDays()`
 *    - konkrete Methode `getLabel()`
 * 2) Erstelle `Book` und `Movie` als Unterklassen.
 *    - Book: author, Leihfrist 28 Tage
 *    - Movie: director, Leihfrist 7 Tage
 * 3) Implementiere `longestLoanPeriod(media)`:
 *    - gibt die größte Leihfrist zurück
 */

export abstract class Media {
  // TODO
}

export class Book extends Media {
  // TODO
}

export class Movie extends Media {
  // TODO
}

export function longestLoanPeriod(media: Media[]): number {
  // TODO
  return 0;
}
