import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs/operators';
import { recipeDatas } from '../fakedata/recipe-datas';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  all(): Observable<Recipe[]> {
    return of(recipeDatas);
  }

  get(slug: string): Observable<Recipe> {
    return of(recipeDatas).pipe(map((recipes) => recipes.filter((recipe) => recipe.getSlug === slug)[0]));
  }

  edit(id: number) {}
  delete(id: number) {}
}
