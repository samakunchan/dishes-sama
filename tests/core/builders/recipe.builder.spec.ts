import { Ingredient, Recipe, Step } from '../../../src/app/core/models/recipe.model';
import { RecipeBuilder } from '../../../src/app/core/builders/recipe.builder';

describe('Recipe builder', () => {
  let recipeBuilder: RecipeBuilder;
  let ingredients: Ingredient;
  let steps: Step;
  beforeEach(() => {
    recipeBuilder = new RecipeBuilder();
    ingredients = new Ingredient(1, 'tomate');
    steps = new Step(1, 'lorem ipsum');
  });

  it('should return a Recipe entity build', () => {
    expect(recipeBuilder.build()).toBeInstanceOf(Recipe);
  });

  it('should return a numeric uuid', () => {
    expect(recipeBuilder.withTitle('Un chien')).toEqual({ title: 'Un chien' });
  });
  it('should return a numeric uuid', () => {
    expect(recipeBuilder.withUid(1)).toEqual({ uid: 1 });
  });
  it('should return a string url', () => {
    expect(recipeBuilder.withImgUrl('http://placehold.it/300x300')).toEqual({ imgUrl: 'http://placehold.it/300x300' });
  });
  it('should return a string slug', () => {
    expect(recipeBuilder.withSlug('un-plat')).toEqual({ slug: 'un-plat' });
  });
  it('should return a string author', () => {
    expect(recipeBuilder.withAuthor('Samakunchan')).toEqual({ author: 'Samakunchan' });
  });
  it('should return a string date', () => {
    expect(recipeBuilder.withDate('25-07-2020')).toEqual({ date: '25-07-2020' });
  });
  it('should return a list of ingredients', () => {
    expect(recipeBuilder.withIngredients([ingredients])).toEqual({ ingredients: [ingredients] });
  });
  it('should return a list of steps', () => {
    expect(recipeBuilder.withSteps([steps])).toEqual({ steps: [steps] });
  });
});
