/**
 * Stadtbibliothek OOP – abstrakte Basisklasse
 *
 * Musterlösung
 */

export abstract class Media {
  constructor(
    public readonly id: string,
    public title: string,
  ) {}

  public abstract getLoanPeriodDays(): number;

  public getLabel(): string {
    return `${this.id}: ${this.title}`;
  }
}

export class Book extends Media {
  constructor(id: string, title: string, public author: string) {
    super(id, title);
  }

  public getLoanPeriodDays(): number {
    return 28;
  }
}

export class Movie extends Media {
  constructor(id: string, title: string, public director: string) {
    super(id, title);
  }

  public getLoanPeriodDays(): number {
    return 7;
  }
}

export function longestLoanPeriod(media: Media[]): number {
  return Math.max(...media.map(item => item.getLoanPeriodDays()));
}
