import { Recipe } from '../models/recipe.model';
import { RecipeBuilder } from '../builders/recipe.builder';
import { IngredientBuilder } from '../builders/ingredientBuilder';
import { StepBuilder } from '../builders/stepBuilder';

export const recipeDatas: Recipe[] = [
  new RecipeBuilder()
    .withUid(1)
    .withTitle('Grand marinier')
    .withAuthor('Samakunchan')
    .withSlug('grand-marinier')
    .withImgUrl('./assets/images/grand-marnier-ice-cream.jpg')
    .withDescription('Easy and decadent!')
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
    .withTitle('Papoutsakia')
    .withAuthor('Samakunchan')
    .withSlug('papoutsakia')
    .withImgUrl('./assets/images/papoutsakia.jpeg')
    .withDescription(
      'A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means "little shoes" and a portion usually has two. However, when cooking with large American eggplants, you will likely find that one per portion is enough.',
    )
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(3)
    .withTitle('Spiced lamb chops with mint-mango sauce')
    .withAuthor('Samakunchan')
    .withSlug('spiced-lamb')
    .withImgUrl('./assets/images/spiced-lamp-chop.jpg')
    .withDescription('Delicious, refreshing, and super quick to make!')
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(4)
    .withTitle('Garlic mushrooms a la crème with lardons and green pepper')
    .withAuthor('Samakunchan')
    .withSlug('mushrooms')
    .withImgUrl('./assets/images/garlic-mushrooms.jpg')
    .withDescription(
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well\n' +
        '      with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    )
    .withDate('25-07-2020')
    .build(),
  new RecipeBuilder()
    .withUid(5)
    .withTitle('Sous vide Salmon Teriaki')
    .withAuthor('Samakunchan')
    .withSlug('salmon-sous-vide')
    .withImgUrl('./assets/images/salmon-sous-vide.jpg')
    .withDescription('Tender, refreshing and very easy to make')
    .withDate('25-07-2020')
    .build(),
];
