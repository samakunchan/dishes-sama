import { Step } from '../models/recipe.model';

export class StepBuilder {
  protected uid: number;
  protected description: string;

  withUid(value: number): StepBuilder {
    this.uid = value;
    return this;
  }

  withDescription(value: string): StepBuilder {
    this.description = value;
    return this;
  }

  build(): Step {
    return new Step(this.uid, this.description);
  }
}
