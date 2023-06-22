import { Injectable } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';
import { IngredientAddDto } from './dto/IngredientAddDto';

@Injectable()
export class IngredientService {
  constructor(private ingredientRepository: IngredientRepository) {}

  async getAllIngredients(listFilterDto: ListFilterQueryDto) {
    return await this.ingredientRepository.getAllIngredients(listFilterDto);
  }

  async addIngredients(ingredients: IngredientAddDto) {
    return await this.ingredientRepository.addIngredients(ingredients);
  }
}
