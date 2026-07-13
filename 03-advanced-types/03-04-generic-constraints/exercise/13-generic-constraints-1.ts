/**
 * Stadtbibliothek – Datensätze sicher durchsuchen
 *
 * Aufgaben:
 * 1) Implementiere `findById()` generisch.
 * 2) Beschränke T so, dass nur Objekte mit einer string-Eigenschaft `id`
 *    verwendet werden dürfen.
 * 3) Rückgabe: gefundener Datensatz oder undefined.
 * 4) Implementiere zusätzlich `pluck()` so, dass nur vorhandene Keys
 *    übergeben werden können.
 */

export function findById(items: unknown, id: string) {
  // TODO: Signatur und Implementierung anpassen
  return undefined;
}

export function pluck(obj: unknown, key: string) {
  // TODO: Signatur und Implementierung anpassen
  return undefined;
}

const catalog = [
  { id: "b-1", title: "Clean Code" },
  { id: "b-2", title: "TypeScript kompakt" },
];

console.log(findById(catalog, "b-2"));
console.log(pluck(catalog[0], "title") === "Clean Code");
// pluck(catalog[0], "author"); // soll einen TypeScript-Fehler erzeugen
