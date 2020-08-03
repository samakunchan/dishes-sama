import { initialState, recipeReducer } from '../../../src/app/store/recipe/recipe.reducer';

describe('Recipe Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = recipeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
