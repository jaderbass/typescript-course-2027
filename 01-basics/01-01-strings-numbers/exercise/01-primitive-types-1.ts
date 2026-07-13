/**
 * Stadtbibliothek – neue Mitgliedschaft
 *
 * Aufgaben:
 * 1) Implementiere `normalizeMemberName()`:
 *    - Leerzeichen am Anfang und Ende entfernen
 *    - mehrere Leerzeichen zwischen Wörtern durch ein Leerzeichen ersetzen
 *    - den ersten Buchstaben des Namens großschreiben
 * 2) Implementiere `isAdultMember()`:
 *    - ab 18 Jahren wird `true` zurückgegeben
 * 3) Implementiere `createMemberLabel()`:
 *    - Ausgabe: "M-1042 | Mia Sommer | volljährig"
 *    - bei Minderjährigen endet die Ausgabe mit "minderjährig"
 */

export function normalizeMemberName(name: string): string {
  // TODO
  return "";
}

export function isAdultMember(age: number): boolean {
  // TODO
  return false;
}

export function createMemberLabel(memberNumber: number, name: string, age: number): string {
  // TODO
  return "";
}

console.log(normalizeMemberName("  mia   sommer ") === "Mia sommer");
console.log(isAdultMember(18) === true);
console.log(createMemberLabel(1042, "mia sommer", 17) === "M-1042 | Mia sommer | minderjährig");
