import { DataSource } from 'apollo-datasource';
import { QueryRecipeArgs } from '../generated/graphql';
import { Recipe } from '../../entities/recipe.entity';

interface createRecipeArgs {
    title: string,
    content: string
}

interface updateRecipeArgs extends QueryRecipeArgs{
  title?: string,
  content?: string
}

/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class RecipesProvider extends DataSource {
  public async getRecipe({ id }: QueryRecipeArgs) {
    const recipe = await Recipe.findOneBy({id});
    return recipe;
  }

  public async getRecipes() {
    const recipes = await Recipe.find();
    return recipes;
  }


  public async createRecipe({title, content}: createRecipeArgs) {
    const recipe = new Recipe()
    recipe.title = title;
    recipe.content = content;
    await recipe.save();
    return recipe;
  }

  public async updateRecipe({id, title, content}: updateRecipeArgs) {
    const recipe = await Recipe.findOneBy({id});
    if(title)
      recipe.title = title;
    if(content)
      recipe.content = content;
    await recipe.save();
    return recipe;
  }
}
