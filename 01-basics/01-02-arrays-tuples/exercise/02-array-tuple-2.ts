/**
 * Stadtbibliothek – Regalpositionen
 *
 * Eine Position besteht aus Regalnummer und Fachnummer.
 *
 * Aufgaben:
 * 1) Definiere `ShelfPosition` als Tuple aus zwei Zahlen.
 * 2) Implementiere `formatShelfPosition()`:
 *    - [3, 7] wird zu "Regal 3, Fach 7"
 * 3) Implementiere `moveBook()`:
 *    - erhält eine Position und zwei Veränderungen
 *    - gibt eine neue Position zurück
 */

export type ShelfPosition = [number, number];

export function formatShelfPosition(position: ShelfPosition): string {
  // TODO
  return "";
}

export function moveBook(
  position: ShelfPosition,
  shelfChange: number,
  compartmentChange: number,
): ShelfPosition {
  // TODO
  return position;
}

console.log(formatShelfPosition([3, 7]) === "Regal 3, Fach 7");
console.log(moveBook([3, 7], 1, -2).join(",") === "4,5");
