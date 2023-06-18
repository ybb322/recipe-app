import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('ingredient')
@Unique(['name'])
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
