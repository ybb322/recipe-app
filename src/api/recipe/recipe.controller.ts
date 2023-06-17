import { Controller, Get, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async getAllRecipes(@Query() listFilterDto: ListFilterQueryDto) {
    return await this.recipeService.getAllRecipes(listFilterDto);
  }
}
