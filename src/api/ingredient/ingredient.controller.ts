import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientDto } from './dto/IngredientDto';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

@Controller('ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Get()
  async getAllIngredients(@Query() listFilterDto: ListFilterQueryDto) {
    return await this.ingredientService.getAllIngredients(listFilterDto);
  }

  @Put()
  async addIngredients(@Body() ingredients: Array<IngredientDto>) {
    return await this.ingredientService.addIngredients(ingredients);
  }
}
