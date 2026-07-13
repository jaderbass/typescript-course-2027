/**
 * Stadtbibliothek – neue Mitgliedschaft
 *
 * Musterlösung
 */

export function normalizeMemberName(name: string): string {
  const normalizedName = name.trim().replace(/\s+/g, " ");
  return normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1);
}

export function isAdultMember(age: number): boolean {
  return age >= 18;
}

export function createMemberLabel(memberNumber: number, name: string, age: number): string {
  const ageLabel = isAdultMember(age) ? "volljährig" : "minderjährig";
  return `M-${memberNumber} | ${normalizeMemberName(name)} | ${ageLabel}`;
}

console.log(normalizeMemberName("  mia   sommer ") === "Mia sommer");
console.log(isAdultMember(18) === true);
console.log(createMemberLabel(1042, "mia sommer", 17) === "M-1042 | Mia sommer | minderjährig");
