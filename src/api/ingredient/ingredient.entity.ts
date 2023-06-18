import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsOptional } from 'class-validator';

@Entity('ingredient')
@Unique(['name'])
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsOptional()
  name: string;
}
