/**
 * Stadtbibliothek – Datensätze sicher durchsuchen
 *
 * Musterlösung
 */

export function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const catalog = [
  { id: "b-1", title: "Clean Code" },
  { id: "b-2", title: "TypeScript kompakt" },
];

console.log(findById(catalog, "b-2")?.title === "TypeScript kompakt");
console.log(pluck(catalog[0], "title") === "Clean Code");
// pluck(catalog[0], "author"); // TypeScript-Fehler wie gewünscht
