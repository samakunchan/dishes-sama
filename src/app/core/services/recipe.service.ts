import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeSubject$: Subject<Recipe[]> = new BehaviorSubject(this.source);
  recipe$ = this.recipeSubject$.asObservable();

  constructor(private source: Recipe[]) {}

  all(): Observable<Recipe[]> {
    return this.recipe$;
  }

  get(uid: number): Observable<Recipe> {
    return this.recipe$.pipe(map((recipes) => recipes.filter((recipe: Recipe) => recipe.getUid === uid)[0]));
  }

  emitRecipe(recipe: Recipe) {
    this.recipeSubject$.next([recipe]);
  }
}
