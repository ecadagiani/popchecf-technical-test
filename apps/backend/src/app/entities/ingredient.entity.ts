import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { RecipeHasIngredient } from './recipeHasIngredient.entity';

@Entity('ingredient')
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => RecipeHasIngredient,
    (recipeHasIngredient) => recipeHasIngredient.ingredient,
    { onDelete: 'CASCADE' }
  )
  recipeHasIngredient: RecipeHasIngredient[];
}
