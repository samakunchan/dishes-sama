import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../../core/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../../../../core/models/recipe.model';

@Component({
  selector: 'dish-recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.scss'],
})
export class RecipeShowComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showOneRecipe(this.route.snapshot.paramMap.get('slug'));
  }

  showOneRecipe(slug: string) {
    this.recipe$ = this.recipeService.get(slug);
  }
}
