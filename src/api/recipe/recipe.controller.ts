import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';
import { RecipeCreateDto } from './dto/recipeCreateDto';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async getAllRecipes(@Query() listFilterDto: ListFilterQueryDto) {
    return await this.recipeService.getAllRecipes(listFilterDto);
  }

  @Get('/:id')
  async getRecipeById(@Param('id') id: number) {
    return await this.recipeService.getRecipeById(id);
  }

  @Delete('/:id')
  async deleteRecipeById(@Param('id') id: number) {
    return await this.recipeService.deleteRecipeById(id);
  }

  @Post()
  async createRecipe(@Body() recipe: RecipeCreateDto) {
    return await this.recipeService.createRecipe(recipe);
  }
}
