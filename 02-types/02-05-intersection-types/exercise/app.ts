/**
 * Stadtbibliothek – Fähigkeiten kombinieren
 *
 * Ein Datensatz kann aus unabhängigen Eigenschaften zusammengesetzt werden.
 *
 * Aufgaben:
 * 1) Definiere:
 *    - Identifiable = { id: string }
 *    - Reservable = { reservedBy?: number }
 *    - Auditable = { createdAt: Date; updatedAt: Date }
 * 2) Kombiniere alle drei Typen zum Intersection Type `CatalogEntry`.
 * 3) Implementiere `reserveEntry()`:
 *    - gibt ein neues Objekt zurück
 *    - setzt reservedBy auf die Mitgliedsnummer
 *    - aktualisiert updatedAt
 */

export type Identifiable = unknown; // TODO
export type Reservable = unknown; // TODO
export type Auditable = unknown; // TODO
export type CatalogEntry = unknown; // TODO

export function reserveEntry(entry: CatalogEntry, memberNumber: number): CatalogEntry {
  // TODO
  return entry;
}
