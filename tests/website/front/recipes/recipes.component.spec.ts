import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from '../../../../src/app/website/front/pages/recipes/recipes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RecipeService } from '../../../../src/app/core/services/recipe.service';
import { of } from 'rxjs';
import { RecipeBuilder } from '../../../../src/app/core/builders/recipe.builder';
import { StoreModule } from '@ngrx/store';

describe('Recipes Component', () => {
  let fixture: ComponentFixture<RecipesComponent>;
  let component: RecipesComponent;
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesComponent],
      providers: [RecipeService],
      imports: [StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RecipesComponent);
    service = TestBed.inject(RecipeService);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be ready to return a list 0 of recipes', (done) => {
    spyOn(service, 'all').and.returnValue(of([]));
    component.listRecipes().subscribe((list) => {
      expect(list.length).toEqual(0);
      expect(list).toEqual([]);
      done();
    });
  });

  it('should be ready to return a list 1 of recipes', (done) => {
    const firstRecipe = new RecipeBuilder().build();
    spyOn(service, 'all').and.returnValue(of([firstRecipe]));
    component.listRecipes().subscribe((list) => {
      expect(list.length).toEqual(1);
      expect(list).toEqual([firstRecipe]);
      done();
    });
  });

  it('should be ready to return a list 2 of recipes', (done) => {
    const firstRecipe = new RecipeBuilder().build();
    const secondRecipe = new RecipeBuilder().build();
    spyOn(service, 'all').and.returnValue(of([firstRecipe, secondRecipe]));
    component.listRecipes().subscribe((list) => {
      expect(list.length).toEqual(2);
      expect(list).toEqual([firstRecipe, secondRecipe]);
      done();
    });
  });
});
