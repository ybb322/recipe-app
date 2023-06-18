import { Injectable } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { IngredientDto } from './dto/IngredientDto';

@Injectable()
export class IngredientService {
  constructor(private ingredientRepository: IngredientRepository) {}

  async addIngredients(ingredients: Array<IngredientDto>) {
    return await this.ingredientRepository.addIngredients(ingredients);
  }
}
