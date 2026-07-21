/**
 * Stadtbibliothek – Ausleihvorgang modellieren
 *
 * Aufgaben:
 * 1) Lege folgende Type Aliases an:
 *    - LoanStatus = "borrowed" | "returned" | "overdue"
 *    - Loan = Objekt mit:
 *      bookIsbn, memberNumber, borrowedAt, dueAt und status
 * 2) Implementiere `loanLabel()`:
 *    - Ausgabe: "ISBN 111 → Mitglied 1042 (ausgeliehen)"
 *    - verwende deutsche Bezeichnungen für alle drei Statuswerte
 * 3) Implementiere `markAsReturned()`:
 *    - gibt einen neuen Loan mit Status "returned" zurück
 */

export type LoanStatus = unknown; // TODO
export type Loan = unknown; // TODO

export function loanLabel(loan: Loan): string {
  // TODO
  return "";
}

export function markAsReturned(loan: Loan): Loan {
  // TODO
  return loan;
}
