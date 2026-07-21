/**
 * Stadtbibliothek – Mitglieder identifizieren
 *
 * Musterlösung
 */

export type MemberIdentifier = number | string;

export function formatMemberIdentifier(identifier: MemberIdentifier): string {
  if (typeof identifier === "number") {
    return `Mitglied #${identifier}`;
  }

  return `E-Mail: ${identifier}`;
}

export function parseMemberIdentifier(input: string): MemberIdentifier {
  return /^\d+$/.test(input) ? Number(input) : input;
}

console.log(formatMemberIdentifier(1042) === "Mitglied #1042");
console.log(formatMemberIdentifier("mia@example.org") === "E-Mail: mia@example.org");
console.log(parseMemberIdentifier("1042") === 1042);
