import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

export interface RecipeHandler {
  all(): Observable<Recipe[]>;

  get(slug: string): Observable<Recipe>;

  emitRecipe?(recipe: Recipe);
}
