/**
 * Stadtbibliothek – Mitgliederdaten
 *
 * Musterlösung
 */

export interface LibraryMember {
  memberNumber: number;
  firstName: string;
  lastName: string;
  email?: string;
  active: boolean;
}

export function memberDisplayName(member: LibraryMember): string {
  const name = `${member.firstName} ${member.lastName}`;
  return member.email ? `${name} <${member.email}>` : name;
}

export function canBorrow(member: LibraryMember): boolean {
  return member.active;
}

const member: LibraryMember = {
  memberNumber: 1042,
  firstName: "Mia",
  lastName: "Sommer",
  email: "mia@example.org",
  active: true,
};
console.log(memberDisplayName(member) === "Mia Sommer <mia@example.org>");
console.log(canBorrow(member) === true);
