import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../core/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../../../../core/models/recipe.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../reducers';
import { getAllRecipes } from '../../../../../store/recipe/recipe.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dish-recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.scss'],
})
export class RecipeShowComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.recipe$ = this.store
      .select(getAllRecipes)
      .pipe(map((recipes: Recipe[]) => recipes.filter((recipe) => recipe.getSlug === this.route.snapshot.paramMap.get('slug'))[0]));
  }
}
