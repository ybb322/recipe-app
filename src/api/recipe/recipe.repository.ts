import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';
import { NotFoundException } from '@nestjs/common';
import { RecipeCreateDto } from './dto/recipeCreateDto';
import { RecipeUpdateDto } from './dto/recipeUpdateDto';

export class RecipeRepository {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  async getAllRecipes(listFilterDto: ListFilterQueryDto) {
    const query = this.recipeRepository.createQueryBuilder('recipe');
    const { filter_by, filter_value, sort_by, sort_direction, offset, limit } =
      listFilterDto;

    if (filter_by && filter_value) {
      query.andWhere(`(LOWER(recipe.${filter_by}) LIKE LOWER(:filter_value))`, {
        filter_value: `%${filter_value}%`,
      });
    }

    if (sort_by && sort_direction) {
      query.orderBy(sort_by, sort_direction);
    }

    return await query.getMany();
  }

  async getRecipeById(id: number) {
    const found = await this.recipeRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException('Recipe not found');
    }
    return found;
  }

  async deleteRecipeById(id: number) {
    const result = await this.recipeRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Recipe not found');
    }

    return result;
  }

  async createRecipe(recipe: RecipeCreateDto) {
    console.log(recipe);
    await this.recipeRepository.insert(recipe);
  }

  async updateRecipe(id: number, recipe: RecipeUpdateDto) {
    console.log(id, recipe);
    await this.recipeRepository.update(id, recipe);
  }
}
