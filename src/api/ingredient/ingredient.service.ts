import { Injectable } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { IngredientDto } from './dto/IngredientDto';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

@Injectable()
export class IngredientService {
  constructor(private ingredientRepository: IngredientRepository) {}

  async getAllIngredients(listFilterDto: ListFilterQueryDto) {
    return await this.ingredientRepository.getAllIngredients(listFilterDto);
  }

  async addIngredients(ingredients: Array<IngredientDto>) {
    return await this.ingredientRepository.addIngredients(ingredients);
  }
}
