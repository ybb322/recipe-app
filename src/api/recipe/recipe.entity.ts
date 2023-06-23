import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Comment } from '../comment/comment.entity';

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
}
