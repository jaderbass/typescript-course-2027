/**
 * Stadtbibliothek – Regalpositionen
 *
 * Musterlösung
 */

export type ShelfPosition = [number, number];

export function formatShelfPosition(position: ShelfPosition): string {
  return `Regal ${position[0]}, Fach ${position[1]}`;
}

export function moveBook(
  position: ShelfPosition,
  shelfChange: number,
  compartmentChange: number,
): ShelfPosition {
  return [position[0] + shelfChange, position[1] + compartmentChange];
}

console.log(formatShelfPosition([3, 7]) === "Regal 3, Fach 7");
console.log(moveBook([3, 7], 1, -2).join(",") === "4,5");
