import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../core/services/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../../../core/models/recipe.model';

@Component({
  selector: 'dish-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.listRecipes();
  }

  listRecipes() {
    return (this.recipes$ = this.recipeService.all());
  }
}
