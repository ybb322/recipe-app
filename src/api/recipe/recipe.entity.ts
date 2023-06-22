import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  ownerId: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  cuisine: string;

  @Column()
  @IsNotEmpty()
  cookingTime: number;

  @Column({ default: 0 })
  rating: number;
}
