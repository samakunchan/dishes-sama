import { RecipeService } from '../../../src/app/core/services/recipe.service';
import { RecipeBuilder } from '../../../src/app/core/builders/recipe.builder';
import { Recipe } from '../../../src/app/core/models/recipe.model';

describe('Recipes Service', () => {
  let service: RecipeService;
  let unplat: Recipe = getOneRecipe();

  beforeEach(() => {
    service = new RecipeService([]);
    unplat = getOneRecipe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable list of 0 recipes with the method all()', (done) => {
    service.all().subscribe((list) => {
      expect(list.length).toEqual(0);
      done();
    });
  });

  it('should return an observable list of 0 recipes with the method all()', (done) => {
    service.emitRecipe(unplat);
    service.all().subscribe((list) => {
      expect(list.length).toEqual(1);
      done();
    });
  });

  it('should return an observable detail of one recipe', (done) => {
    service.emitRecipe(unplat);
    service.get(1).subscribe((detail) => {
      expect(detail).toBeTruthy();
      expect(detail.getUid).toEqual(1);
      done();
    });
  });

  function getOneRecipe() {
    return new RecipeBuilder().withUid(1).withTitle('Un plat').withAuthor('Samakunchan').build();
  }
});
