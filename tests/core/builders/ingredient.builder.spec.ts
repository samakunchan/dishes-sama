import { Ingredient } from '../../../src/app/core/models/recipe.model';
import { IngredientBuilder } from '../../../src/app/core/builders/ingredientBuilder';

describe('Ingredient builder', () => {
  let ingredientBuilder: IngredientBuilder;
  beforeEach(() => {
    ingredientBuilder = new IngredientBuilder();
  });

  it('should return a Ingredient entity build', () => {
    expect(ingredientBuilder.build()).toBeInstanceOf(Ingredient);
  });

  it('should return a numeric uuid', () => {
    expect(ingredientBuilder.withUid(1)).toEqual({ uid: 1 });
  });
  it('should return a string title', () => {
    expect(ingredientBuilder.withTitle('Tomate')).toEqual({ title: 'Tomate' });
  });
});
