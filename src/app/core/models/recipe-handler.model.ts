import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

export interface RecipeHandler {
  all(): Observable<Recipe[]>;

  get(uid: number): Observable<Recipe>;
}
