/**
 * Stadtbibliothek – Medienkategorien
 *
 * Musterlösung
 */

export enum MediaCategory {
  Book = "book",
  Movie = "movie",
  AudioBook = "audio-book",
  Magazine = "magazine",
}

export function loanPeriodDays(category: MediaCategory): number {
  switch (category) {
    case MediaCategory.Book:
      return 28;
    case MediaCategory.AudioBook:
      return 14;
    case MediaCategory.Movie:
    case MediaCategory.Magazine:
      return 7;
  }
}

export function categoryLabel(category: MediaCategory): string {
  switch (category) {
    case MediaCategory.Book:
      return "Buch";
    case MediaCategory.Movie:
      return "Film";
    case MediaCategory.AudioBook:
      return "Hörbuch";
    case MediaCategory.Magazine:
      return "Zeitschrift";
  }
}
