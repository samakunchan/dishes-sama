import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LoadRecipes, LoadRecipesSuccess, RecipeActionTypes } from './recipe.actions';
import { RecipeService } from '../../core/services/recipe.service';
import { map, switchMap } from 'rxjs/operators';
import { Recipe } from '../../core/models/recipe.model';

@Injectable()
export class RecipeEffects implements OnInitEffects {
  @Effect()
  loadRecipe$ = this.actions$.pipe(
    ofType<LoadRecipes>(RecipeActionTypes.LoadRecipes),
    switchMap(() => this.recipeService.all().pipe(map((recipes: Recipe[]) => new LoadRecipesSuccess({ recipes })))),
  );
  constructor(private actions$: Actions, private recipeService: RecipeService) {}

  ngrxOnInitEffects(): Action {
    return new LoadRecipes();
  }
}
