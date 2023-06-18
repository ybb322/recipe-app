import { Body, Controller, Put } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientDto } from './dto/IngredientDto';

@Controller('ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Put()
  async addIngredients(@Body() ingredients: Array<IngredientDto>) {
    return await this.ingredientService.addIngredients(ingredients);
  }
}
