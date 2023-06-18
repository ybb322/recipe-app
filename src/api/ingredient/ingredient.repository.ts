import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.entity';
import { Repository } from 'typeorm';
import { IngredientDto } from './dto/IngredientDto';

export class IngredientRepository {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async addIngredients(ingredients: Array<IngredientDto>) {
    console.log(ingredients);
    return await this.ingredientRepository.upsert(ingredients, {
      conflictPaths: ['name'],
      skipUpdateIfNoValuesChanged: true,
    });
  }
}
