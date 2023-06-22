import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('ingredient')
@Unique(['name'])
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;
}
