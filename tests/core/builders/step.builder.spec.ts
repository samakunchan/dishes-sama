import { Step } from '../../../src/app/core/models/recipe.model';
import { StepBuilder } from '../../../src/app/core/builders/stepBuilder';

describe('Step builder', () => {
  let ingredientBuilder: StepBuilder;
  beforeEach(() => {
    ingredientBuilder = new StepBuilder();
  });

  it('should return a Step entity build', () => {
    expect(ingredientBuilder.build()).toBeInstanceOf(Step);
  });

  it('should return a numeric uuid', () => {
    expect(ingredientBuilder.withUid(1)).toEqual({ uid: 1 });
  });
  it('should return a string title', () => {
    expect(ingredientBuilder.withDescription('lorem ipsum')).toEqual({ description: 'lorem ipsum' });
  });
});
