import { Ingredient, Recipe, Step } from '../models/recipe.model';

export class RecipeBuilder {
  protected uid: number;
  protected title: string;
  protected imgUrl: string;
  protected slug: string;
  protected ingredients: Ingredient[];
  protected steps: Step[];
  protected author: string;
  protected date: string;

  withUid(value: number): RecipeBuilder {
    this.uid = value;
    return this;
  }

  withTitle(value: string): RecipeBuilder {
    this.title = value;
    return this;
  }

  withImgUrl(value: string): RecipeBuilder {
    this.imgUrl = value;
    return this;
  }

  withSlug(value: string): RecipeBuilder {
    this.slug = value;
    return this;
  }

  withIngredients(value: Ingredient[]): RecipeBuilder {
    this.ingredients = value;
    return this;
  }

  withSteps(value: Step[]): RecipeBuilder {
    this.steps = value;
    return this;
  }

  withAuthor(value: string): RecipeBuilder {
    this.author = value;
    return this;
  }

  withDate(value: string): RecipeBuilder {
    this.date = value;
    return this;
  }

  build(): Recipe {
    return new Recipe(this.uid, this.title, this.imgUrl, this.slug, this.author, this.date, this.ingredients, this.steps);
  }
}
