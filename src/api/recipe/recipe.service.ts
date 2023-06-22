import { Injectable } from '@nestjs/common';
import { RecipeRepository } from './recipe.repository';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';
import { RecipeCreateDto } from './dto/recipeCreateDto';

@Injectable()
export class RecipeService {
  constructor(private recipeRepository: RecipeRepository) {}

  async getAllRecipes(listFilterDto: ListFilterQueryDto) {
    return await this.recipeRepository.getAllRecipes(listFilterDto);
  }

  async getRecipeById(id: number) {
    return await this.recipeRepository.getRecipeById(id);
  }

  async deleteRecipeById(id: number) {
    return await this.recipeRepository.deleteRecipeById(id);
  }

  async createRecipe(recipe: RecipeCreateDto) {
    return await this.recipeRepository.createRecipe(recipe);
  }
}
