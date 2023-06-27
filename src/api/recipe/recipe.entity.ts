import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Comment } from '../comment/comment.entity';
import { Ingredient } from '../ingredient/ingredient.entity';

@Entity('recipe')
export class Recipe {
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

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  cuisine: string;
  @Column()
  @IsNotEmpty()
  cookingTime: number;

  @Column({ default: 0 })
  @IsNumber()
  rating: number;

  @OneToMany(() => Comment, (comment) => comment.recipe)
  comments: Comment;

  @ManyToMany(() => Ingredient, { cascade: ['insert', 'update'] })
  @JoinTable()
  ingredients: Ingredient[];
}
