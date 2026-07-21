/**
 * Stadtbibliothek – Module
 *
 * Musterlösung
 */

export interface Book {
  id: string;
  title: string;
  author: string;
  available: boolean;
}

export interface Member {
  memberNumber: number;
  name: string;
  active: boolean;
}
