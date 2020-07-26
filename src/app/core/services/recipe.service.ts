import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs/operators';
import { recipeDatas } from '../fakedata/recipe-datas';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeSubject$: Subject<Recipe> = new BehaviorSubject(null);
  recipe$ = this.recipeSubject$.asObservable();

  constructor() {}

  all(): Observable<Recipe[]> {
    return of(recipeDatas);
  }

  get(slug: string): Observable<Recipe> {
    return of(recipeDatas).pipe(map((recipes) => recipes.filter((recipe) => recipe.getSlug === slug)[0]));
  }

  emitRecipe(recipe: Recipe) {
    this.recipeSubject$.next(recipe);
  }
}
