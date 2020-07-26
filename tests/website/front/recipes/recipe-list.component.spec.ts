import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recipe } from '../../../../src/app/core/models/recipe.model';
import { RecipeBuilder } from '../../../../src/app/core/builders/recipe.builder';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RecipeListComponent } from '../../../../src/app/website/front/pages/recipes/recipe-list/recipe-list.component';

describe('Recipe List Component', () => {
  let fixture: ComponentFixture<RecipeListComponent>;
  let component: RecipeListComponent;
  let inputDecorator: Recipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.debugElement.componentInstance;
    inputDecorator = new RecipeBuilder().build();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  describe('With an input decorator', () => {
    it('should be an instance of Recipe', () => {
      expect(inputDecorator).toBeInstanceOf(Recipe);
    });
  });
});
