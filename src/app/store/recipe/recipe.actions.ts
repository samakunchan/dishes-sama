import { Action } from '@ngrx/store';
import { Recipe } from '../../core/models/recipe.model';

export enum RecipeActionTypes {
  LoadRecipes = '[Recipe Init] Load Recipes',
  LoadRecipesSuccess = '[Recipe Effect] Load Recipes Success',
  LoadRecipesFailure = '[Recipe Effect] Load Recipes Failure',
}

export class LoadRecipes implements Action {
  readonly type = RecipeActionTypes.LoadRecipes;
}

export class LoadRecipesSuccess implements Action {
  readonly type = RecipeActionTypes.LoadRecipesSuccess;
  constructor(public payload: { recipes: Recipe[] }) {}
}

export class LoadRecipesFailure implements Action {
  readonly type = RecipeActionTypes.LoadRecipesFailure;
  constructor(public payload: { error: any }) {}
}

export type RecipeActions = LoadRecipes | LoadRecipesSuccess | LoadRecipesFailure;
