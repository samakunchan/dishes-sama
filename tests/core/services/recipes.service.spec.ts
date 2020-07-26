import { RecipeService } from '../../../src/app/core/services/recipe.service';
import { RecipeBuilder } from '../../../src/app/core/builders/recipe.builder';
import { Recipe } from '../../../src/app/core/models/recipe.model';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('Recipes Service', () => {
  let service: RecipeService;
  let unplat: Recipe = getOneRecipe();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
    unplat = getOneRecipe();
    spyOn(service, 'all').and.returnValue(of([unplat]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable list of 1 recipe with the method all()', (done) => {
    service.all().subscribe((list) => {
      expect(list.length).toEqual(1);
      done();
    });
  });

  it('should return an observable detail of one recipe with the method get()', (done) => {
    service.get('un-chien-1').subscribe((detail) => {
      expect(detail).toBeTruthy();
      expect(detail.getUid).toEqual(1);
      done();
    });
  });

  function getOneRecipe() {
    return new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
  }
});
