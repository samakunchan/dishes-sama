import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../core/services/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../../../core/models/recipe.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../reducers';
import { getAllRecipes } from '../../../../store/recipe/recipe.selectors';

@Component({
  selector: 'dish-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.listRecipes();
    this.recipes$ = this.store.select(getAllRecipes);
  }

  listRecipes() {
    return (this.recipes$ = this.recipeService.all());
  }
}
