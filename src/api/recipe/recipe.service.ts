import { Injectable } from '@nestjs/common';
import { RecipeRepository } from './recipe.repository';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

@Injectable()
export class RecipeService {
  constructor(private recipeRepository: RecipeRepository) {}

  async getAllRecipes(listFilterDto: ListFilterQueryDto) {
    return await this.recipeRepository.getAllRecipes(listFilterDto);
  }
}
