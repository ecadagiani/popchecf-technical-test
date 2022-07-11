import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

@Entity('recipeHasIngredient')
export class RecipeHasIngredient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity?: number;

  @Column()
  peopleNumber?: number;

  @ManyToOne( () => Ingredient, ingredient => ingredient.recipeHasIngredient)
  @JoinTable()
  ingredient: Ingredient

  @ManyToOne( () => Recipe, recipe => recipe.recipeHasIngredient)
  @JoinTable()
  recipe: Recipe
}
