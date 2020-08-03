import { Recipe } from '../../core/models/recipe.model';
import { RecipeActions, RecipeActionTypes } from './recipe.actions';

export const recipeFeatureKey = 'recipes';

export interface RecipeState {
  recipes: Recipe[];
  error: any;
}

export const initialState: RecipeState = {
  recipes: [],
  error: undefined,
};

export function recipeReducer(state = initialState, action: RecipeActions): RecipeState {
  switch (action.type) {
    case RecipeActionTypes.LoadRecipesSuccess:
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    case RecipeActionTypes.LoadRecipesFailure:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
