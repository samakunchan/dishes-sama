export class Ingredient {
  constructor(private uid: number, private title: string) {}
  get getUid(): number {
    return this.uid;
  }
  get getTitle(): string {
    return this.title;
  }
}
export class Step {
  constructor(private uid: number, private description: string) {}
  get getUid(): number {
    return this.uid;
  }
  get getDescription(): string {
    return this.description;
  }
}
export class Recipe {
  constructor(
    private uid: number,
    private title: string,
    private imgUrl: string,
    private slug: string,
    private description: string,
    private author: string,
    private date: string,
    private ingredients?: Ingredient[],
    private steps?: Step[],
  ) {}

  get getUid(): number {
    return this.uid;
  }

  get getTitle(): string {
    return this.title;
  }

  get getImgUrl(): string {
    return this.imgUrl;
  }

  get getSlug(): string {
    return this.slug;
  }

  get getDescription(): string {
    return this.description;
  }

  get getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  get getSteps(): Step[] {
    return this.steps;
  }

  get getAuthor(): string {
    return this.author;
  }

  get getDate(): string {
    return this.date;
  }
}
