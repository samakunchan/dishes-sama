import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeService } from '../../../../../src/app/core/services/recipe.service';
import { Recipe } from '../../../../../src/app/core/models/recipe.model';
import { RecipeComponent } from '../../../../../src/app/website/front/pages/recipes/recipe/recipe.component';
import { RecipeHandler } from '../../../../../src/app/core/models/recipe-handler.model';
import { RecipeBuilder } from '../../../../../src/app/core/builders/recipe.builder';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Recipe Detail Component', () => {
  let fixture: ComponentFixture<RecipeComponent>;
  let recipe: RecipeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RecipeComponent);
    recipe = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(recipe).toBeTruthy();
  });

  describe('And a detail of one recipe', () => {
    it('should show 1 recipe', (done) => {
      const unplat: Recipe = new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
      const recipeSource: RecipeHandler = new RecipeService([unplat]);
      recipeSource.get(1).subscribe((oneRecipe: Recipe) => {
        expect(oneRecipe).toBeInstanceOf(Recipe);
        expect(oneRecipe.getTitle).toEqual('Un plat');
        done();
      });
    });
  });
});
