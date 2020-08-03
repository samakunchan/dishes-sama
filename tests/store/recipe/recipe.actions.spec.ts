import * as RecipeActions from '../../../src/app/store/recipe/recipe.actions';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new RecipeActions.LoadRecipes()).toBeTruthy();
  });
});
