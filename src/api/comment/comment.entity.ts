import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
  @IsNumber()
  recipeId: number;

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
}
