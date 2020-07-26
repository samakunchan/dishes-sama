import { Ingredient } from '../models/recipe.model';

export class IngredientBuilder {
  protected uid: number;
  protected title: string;

  withUid(value: number): IngredientBuilder {
    this.uid = value;
    return this;
  }

  withTitle(value: string): IngredientBuilder {
    this.title = value;
    return this;
  }

  build(): Ingredient {
    return new Ingredient(this.uid, this.title);
  }
}
