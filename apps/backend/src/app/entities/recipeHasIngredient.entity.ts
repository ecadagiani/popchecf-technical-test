import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

@Entity('recipeHasIngredient')
export class RecipeHasIngredient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true
  })
  quantity?: number;

  @Column({
    nullable: true
  })
  peopleNumber?: number;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipeHasIngredient)
  ingredient: Ingredient;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;
}
