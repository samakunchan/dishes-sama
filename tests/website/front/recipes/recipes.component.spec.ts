import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from '../../../../src/app/website/front/pages/recipes/recipes.component';
import { Recipe } from '../../../../src/app/core/models/recipe.model';
import { RecipeHandler } from '../../../../src/app/core/models/recipe-handler.model';
import { RecipeService } from '../../../../src/app/core/services/recipe.service';
import { RecipeBuilder } from '../../../../src/app/core/builders/recipe.builder';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Recipes Component', () => {
  let fixture: ComponentFixture<RecipesComponent>;
  let recipes: RecipesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RecipesComponent);
    recipes = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(recipes).toBeTruthy();
  });

  describe('A list of recipes', () => {
    it('should return 0 when we dont have recipes', (done) => {
      const recipeSource: RecipeHandler = new RecipeService([]);
      recipeSource.all().subscribe((recipe) => {
        expect(recipe).toEqual([]);
        done();
      });
    });

    it('should return 1 when we have 1 recipe', (done) => {
      const unplat: Recipe = new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
      const recipeSource: RecipeHandler = new RecipeService([unplat]);
      recipeSource.all().subscribe((recipe) => {
        expect(recipe).toEqual([unplat]);
        expect(recipe.length).toEqual([unplat].length);
        done();
      });
    });

    it('should return 2 when we have 2 recipes', (done) => {
      const unplat: Recipe = new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
      const unautreplat: Recipe = new RecipeBuilder().withUid(2).withTitle('Un autre plate').withAuthor('Samakunchan').build();
      const recipeSource: RecipeHandler = new RecipeService([unplat, unautreplat]);
      recipeSource.all().subscribe((recipe: Recipe[]) => {
        expect(recipe).toEqual([unplat, unautreplat]);
        expect(recipe.length).toEqual([unplat, unautreplat].length);
        done();
      });
    });
  });

  describe('And a detail of one recipe', () => {
    it('should show 1 recipe', (done) => {
      const unplat: Recipe = new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
      const recipeSource: RecipeHandler = new RecipeService([unplat]);
      recipeSource.get(1).subscribe((recipe: Recipe) => {
        expect(recipe.getTitle).toEqual('Un plat');
        done();
      });
    });
  });
});
