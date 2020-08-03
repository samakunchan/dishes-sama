import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeService } from '../../../../src/app/core/services/recipe.service';
import { Recipe } from '../../../../src/app/core/models/recipe.model';
import { RecipeBuilder } from '../../../../src/app/core/builders/recipe.builder';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RecipeShowComponent } from '../../../../src/app/website/front/pages/recipes/recipe-show/recipe-show.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../stubs/activated-route-stub';
import { of } from 'rxjs';
import {StoreModule} from '@ngrx/store';

describe('Recipe Show Component', () => {
  let fixture: ComponentFixture<RecipeShowComponent>;
  let component: RecipeShowComponent;
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeShowComponent],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }],
      imports: [StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RecipeShowComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show 1 recipe', (done) => {
    const unplat: Recipe = new RecipeBuilder().withTitle('Shiba Inu').build();
    spyOn(service, 'get').and.returnValue(of(unplat));
    service.get('un-chien-1').subscribe((oneRecipe: Recipe) => {
      expect(oneRecipe).toBeInstanceOf(Recipe);
      expect(oneRecipe.getTitle).toEqual('Shiba Inu');
      done();
    });
  });
});
