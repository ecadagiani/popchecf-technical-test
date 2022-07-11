import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RecipeHasIngredient } from './recipeHasIngredient.entity';

@Entity('recipes')
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => RecipeHasIngredient, recipeHasIngredient => recipeHasIngredient.ingredient)
  ingredients: RecipeHasIngredient[];
}
