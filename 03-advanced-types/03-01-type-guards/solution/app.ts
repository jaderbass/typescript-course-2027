/**
 * Stadtbibliothek – unbekannte Importdaten prüfen
 *
 * Musterlösung
 */

export type ImportedBook = {
  title: string;
  isbn: string;
};

export function isImportedBook(value: unknown): value is ImportedBook {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("title" in value) || !("isbn" in value)) {
    return false;
  }

  return (
    typeof value.title === "string" &&
    value.title.trim() !== "" &&
    typeof value.isbn === "string" &&
    value.isbn.trim() !== ""
  );
}

export function parseImportedBook(json: string): ImportedBook {
  const value: unknown = JSON.parse(json);

  if (!isImportedBook(value)) {
    throw new Error("Ungültiger Buchdatensatz");
  }

  return value;
}

console.log(isImportedBook({ title: "Clean Code", isbn: "111" }) === true);
console.log(isImportedBook({ title: "Clean Code" }) === false);
