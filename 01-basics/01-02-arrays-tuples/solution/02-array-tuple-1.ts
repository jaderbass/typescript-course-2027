/**
 * Stadtbibliothek – einfache Titelliste
 *
 * Musterlösung
 */

export function addBookTitle(titles: string[], newTitle: string): string[] {
  return [...titles, newTitle];
}

export function removeBookTitle(titles: string[], titleToRemove: string): string[] {
  return titles.filter(title => title !== titleToRemove);
}

export function uniqueSortedTitles(titles: string[]): string[] {
  return [...new Set(titles)].sort();
}

const titles = ["TypeScript", "Clean Code", "TypeScript"];
console.log(addBookTitle(titles, "JavaScript").length === 4);
console.log(titles.length === 3);
console.log(removeBookTitle(titles, "TypeScript").join(",") === "Clean Code");
console.log(uniqueSortedTitles(titles).join(",") === "Clean Code,TypeScript");
