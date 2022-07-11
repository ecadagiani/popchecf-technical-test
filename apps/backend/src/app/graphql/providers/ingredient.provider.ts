import { DataSource } from 'apollo-datasource';
import { QueryRecipeArgs, MutationCreateIngredientArgs, MutationUpdateIngredientArgs } from '../generated/graphql';
import { Ingredient } from '../../entities/ingredient.entity';


/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class IngredientProvider extends DataSource {
  public async getIngredient({ id }: QueryRecipeArgs) {
    const ingredient = await Ingredient.findOneBy({id});
    return ingredient;
  }

  public async getIngredients() {
    const ingredients = await Ingredient.find();
    return ingredients;
  }

  public async createIngredient({name}: MutationCreateIngredientArgs) {
    const ingredient = new Ingredient()
    ingredient.name = name;
    await ingredient.save();
    return ingredient;
  }

  public async updateIngredient({id, name}: MutationUpdateIngredientArgs) {
    const ingredient = await Ingredient.findOneBy({id});
    ingredient.name = name;
    await ingredient.save();
    return ingredient;
  }
}
