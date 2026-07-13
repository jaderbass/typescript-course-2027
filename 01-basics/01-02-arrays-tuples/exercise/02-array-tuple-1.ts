/**
 * Stadtbibliothek – einfache Titelliste
 *
 * Aufgaben:
 * 1) Implementiere `addBookTitle()`:
 *    - gibt ein neues Array zurück
 *    - das ursprüngliche Array darf nicht verändert werden
 * 2) Implementiere `removeBookTitle()`:
 *    - entfernt alle Vorkommen des angegebenen Titels
 * 3) Implementiere `uniqueSortedTitles()`:
 *    - entfernt doppelte Titel
 *    - sortiert alphabetisch
 */

export function addBookTitle(titles: string[], newTitle: string): string[] {
  // TODO
  return [];
}

export function removeBookTitle(titles: string[], titleToRemove: string): string[] {
  // TODO
  return [];
}

export function uniqueSortedTitles(titles: string[]): string[] {
  // TODO
  return [];
}

const titles = ["TypeScript", "Clean Code", "TypeScript"];
console.log(addBookTitle(titles, "JavaScript").length === 4);
console.log(titles.length === 3);
console.log(removeBookTitle(titles, "TypeScript").join(",") === "Clean Code");
console.log(uniqueSortedTitles(titles).join(",") === "Clean Code,TypeScript");
