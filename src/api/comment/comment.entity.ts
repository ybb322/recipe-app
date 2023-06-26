import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Recipe } from '../recipe/recipe.entity';
import { JoinColumn } from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  description: string;

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  rating: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  recipeId: number;

  @ManyToOne(() => Recipe, (recipe) => recipe)
  @JoinColumn({ name: 'recipeId' })
  recipe: Recipe;
}
