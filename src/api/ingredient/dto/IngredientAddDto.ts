import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { IngredientDto } from './IngredientDto';
import { Type } from 'class-transformer';

export class IngredientAddDto {
  @IsNotEmpty()
  @IsArray()
  @Type(() => IngredientDto)
  @ValidateNested({ each: true })
  ingredients: IngredientDto[];
}
