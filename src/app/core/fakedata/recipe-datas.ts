import { Recipe } from '../models/recipe.model';
import { RecipeBuilder } from '../builders/recipe.builder';
import { IngredientBuilder } from '../builders/ingredientBuilder';
import { StepBuilder } from '../builders/stepBuilder';

export const recipeDatas: Recipe[] = [
  new RecipeBuilder()
    .withUid(1)
    .withTitle('Shiba Inu')
    .withAuthor('Samakunchan')
    .withSlug('un-chien-1')
    .withImgUrl('https://material.angular.io/assets/img/examples/shiba2.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .withIngredients([
      new IngredientBuilder().withUid(1).withTitle('4 cups heavy cream').build(),
      new IngredientBuilder().withUid(2).withTitle('1 cup icing sugar').build(),
    ])
    .withSteps([
      new StepBuilder()
        .withUid(1)
        .withDescription(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere ipsam nam numquam reprehenderit ullam unde vero voluptate!\n' +
            'Consectetur cum ipsum itaque iusto laborum magni nam neque suscipit temporibus vitae!',
        )
        .build(),
      new StepBuilder()
        .withUid(2)
        .withDescription(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere ipsam nam numquam reprehenderit ullam unde vero voluptate!\n' +
            'Consectetur cum ipsum itaque iusto laborum magni nam neque suscipit temporibus vitae!',
        )
        .build(),
      new StepBuilder()
        .withUid(3)
        .withDescription(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere ipsam nam numquam reprehenderit ullam unde vero voluptate!\n' +
            'Consectetur cum ipsum itaque iusto laborum magni nam neque suscipit temporibus vitae!',
        )
        .build(),
      new StepBuilder()
        .withUid(4)
        .withDescription(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere ipsam nam numquam reprehenderit ullam unde vero voluptate!\n' +
            'Consectetur cum ipsum itaque iusto laborum magni nam neque suscipit temporibus vitae!',
        )
        .build(),
      new StepBuilder()
        .withUid(5)
        .withDescription(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere ipsam nam numquam reprehenderit ullam unde vero voluptate!\n' +
            'Consectetur cum ipsum itaque iusto laborum magni nam neque suscipit temporibus vitae!',
        )
        .build(),
    ])
    .build(),
  new RecipeBuilder()
    .withUid(2)
    .withTitle('Shiba Inu')
    .withAuthor('Samakunchan')
    .withSlug('un-chien-2')
    .withImgUrl('https://material.angular.io/assets/img/examples/shiba2.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(3)
    .withTitle('Shiba Inu')
    .withAuthor('Samakunchan')
    .withSlug('un-chien-3')
    .withImgUrl('https://material.angular.io/assets/img/examples/shiba2.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(4)
    .withTitle('Shiba Inu')
    .withAuthor('Samakunchan')
    .withSlug('un-chien-4')
    .withImgUrl('https://material.angular.io/assets/img/examples/shiba2.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(5)
    .withTitle('Shiba Inu')
    .withAuthor('Samakunchan')
    .withSlug('un-chien-5')
    .withImgUrl('https://material.angular.io/assets/img/examples/shiba2.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .build(),
];
