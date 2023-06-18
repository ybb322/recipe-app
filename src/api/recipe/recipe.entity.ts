import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner_id: number;

  @Column()
  title: string;
  @Column()
  description: string;

  @Column()
  cuisine: string;

  @Column()
  cookingTime: number;

  @Column({ default: 0 })
  rating: number;
}
