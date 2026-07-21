/**
 * Stadtbibliothek – Mitgliederdaten
 *
 * Aufgaben:
 * 1) Definiere das Interface `LibraryMember`:
 *    - memberNumber: number
 *    - firstName: string
 *    - lastName: string
 *    - email?: string
 *    - active: boolean
 * 2) Implementiere `memberDisplayName()`:
 *    - mit E-Mail: "Mia Sommer <mia@example.org>"
 *    - ohne E-Mail: "Mia Sommer"
 * 3) Implementiere `canBorrow()`:
 *    - nur aktive Mitglieder dürfen ausleihen
 */

export interface LibraryMember {
  // TODO
}

export function memberDisplayName(member: LibraryMember): string {
  // TODO
  return "";
}

export function canBorrow(member: LibraryMember): boolean {
  // TODO
  return false;
}
