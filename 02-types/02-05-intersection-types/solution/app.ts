/**
 * Stadtbibliothek – Fähigkeiten kombinieren
 *
 * Musterlösung
 */

export type Identifiable = { id: string };
export type Reservable = { reservedBy?: number };
export type Auditable = { createdAt: Date; updatedAt: Date };
export type CatalogEntry = Identifiable & Reservable & Auditable;

export function reserveEntry(entry: CatalogEntry, memberNumber: number): CatalogEntry {
  return {
    ...entry,
    reservedBy: memberNumber,
    updatedAt: new Date(),
  };
}
