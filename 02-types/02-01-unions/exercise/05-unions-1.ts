/**
 * Stadtbibliothek – Mitglieder identifizieren
 *
 * Ein Mitglied kann über eine numerische Mitgliedsnummer oder eine E-Mail-Adresse
 * gesucht werden.
 *
 * Aufgaben:
 * 1) Definiere `MemberIdentifier` als Union Type.
 * 2) Implementiere `formatMemberIdentifier()`:
 *    - number -> "Mitglied #1042"
 *    - string -> "E-Mail: mia@example.org"
 * 3) Implementiere `parseMemberIdentifier()`:
 *    - enthält die Eingabe ausschließlich Ziffern, gib eine number zurück
 *    - andernfalls bleibt sie ein string
 */

export type MemberIdentifier = unknown; // TODO

export function formatMemberIdentifier(identifier: MemberIdentifier): string {
  // TODO
  return "";
}

export function parseMemberIdentifier(input: string): MemberIdentifier {
  // TODO
  return input;
}

console.log(formatMemberIdentifier(1042) === "Mitglied #1042");
console.log(formatMemberIdentifier("mia@example.org") === "E-Mail: mia@example.org");
console.log(parseMemberIdentifier("1042") === 1042);
