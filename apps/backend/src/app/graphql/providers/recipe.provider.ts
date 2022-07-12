import { DataSource } from 'apollo-datasource';
import { QueryRecipeArgs, MutationCreateRecipeArgs, MutationUpdateRecipeArgs, MutationAddIngredientArgs, MutationRemoveIngredientArgs } from '../generated/graphql';
import { Recipe } from '../../entities/recipe.entity';
import { Ingredient } from '../../entities/ingredient.entity';
import { RecipeHasIngredient } from '../../entities/recipeHasIngredient.entity';

/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class RecipesProvider extends DataSource {
  public async getRecipe({ id }: QueryRecipeArgs) {
    const recipes = await Recipe.find({
      where: { id },
      relations: ['ingredients', 'ingredients.ingredient'],
    });
    return recipes[0];
  }

  public async getRecipes() {
    const recipes = await Recipe.find({
      relations: ['ingredients', 'ingredients.ingredient'],
    });
    return recipes;
  }

  public async createRecipe({ title, content }: MutationCreateRecipeArgs) {
    const recipe = new Recipe();
    recipe.title = title;
    recipe.content = content;
    await recipe.save();
    return recipe;
  }

  public async updateRecipe({ id, title, content }: MutationUpdateRecipeArgs) {
    const recipes = await Recipe.find({
      where: { id },
      relations: ['ingredients', 'ingredients.ingredient'],
    });
    const recipe = recipes[0];
    if (title) recipe.title = title;
    if (content) recipe.content = content;
    await recipe.save();
    return recipe;
  }

  public async addIngredient({
    id,
    ingredientId,
    quantity,
    peopleNumber,
  }: MutationAddIngredientArgs) {
    // todo: bug: ingredient is not added to recipe
    const recipes = await Recipe.find({
      where: { id },
      relations: ['ingredients', 'ingredients.ingredient'],
    });
    const recipe = recipes[0];
    const ingredient = await Ingredient.findOneBy({ id: ingredientId });

    const recipeIngredient = new RecipeHasIngredient();
    recipeIngredient.recipe = recipe;
    recipeIngredient.ingredient = ingredient;
    if (quantity) recipeIngredient.quantity = quantity;
    if (peopleNumber) recipeIngredient.peopleNumber = peopleNumber;

    await recipeIngredient.save();
    recipe.ingredients.push(recipeIngredient);
    await recipe.save();
    console.log(recipe);

    return this.getRecipe({ id });
  }

  public async removeIngredient({ id, ingredientId }: MutationRemoveIngredientArgs) {
    // toto: not tested
    const recipes = await Recipe.find({
      where: { id },
      relations: ['ingredients', 'ingredients.ingredient'],
    });
    const recipe: Recipe = recipes[0];
    recipe.ingredients = recipe.ingredients.filter(
      (ingredientRecipe) => ingredientRecipe.ingredient.id !== ingredientId
    );

    await recipe.save();
    return recipe;
  }
}
