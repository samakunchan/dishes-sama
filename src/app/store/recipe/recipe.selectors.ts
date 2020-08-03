import { createFeatureSelector, createSelector } from '@ngrx/store';
import { recipeFeatureKey, RecipeState } from './recipe.reducer';
const recipeState = createFeatureSelector<RecipeState>(recipeFeatureKey);

export const getAllRecipes = createSelector(recipeState, (state: RecipeState) => state.recipes);
