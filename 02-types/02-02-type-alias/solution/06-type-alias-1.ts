/**
 * Stadtbibliothek – Ausleihvorgang modellieren
 *
 * Musterlösung
 */

export type LoanStatus = "borrowed" | "returned" | "overdue";

export type Loan = {
  bookIsbn: string;
  memberNumber: number;
  borrowedAt: Date;
  dueAt: Date;
  status: LoanStatus;
};

export function loanLabel(loan: Loan): string {
  const statusLabels: Record<LoanStatus, string> = {
    borrowed: "ausgeliehen",
    returned: "zurückgegeben",
    overdue: "überfällig",
  };

  return `ISBN ${loan.bookIsbn} → Mitglied ${loan.memberNumber} (${statusLabels[loan.status]})`;
}

export function markAsReturned(loan: Loan): Loan {
  return { ...loan, status: "returned" };
}

const loan: Loan = {
  bookIsbn: "111",
  memberNumber: 1042,
  borrowedAt: new Date("2026-07-01"),
  dueAt: new Date("2026-07-15"),
  status: "borrowed",
};
console.log(loanLabel(loan) === "ISBN 111 → Mitglied 1042 (ausgeliehen)");
console.log(markAsReturned(loan).status === "returned");
