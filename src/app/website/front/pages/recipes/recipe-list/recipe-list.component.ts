import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../../core/models/recipe.model';

@Component({
  selector: 'dish-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor() {}

  ngOnInit(): void {}
}
