import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IngredientDto } from '../../ingredient/dto/IngredientDto';

export class RecipeCreateDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  cuisine: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cookingTime: number;

  @IsNotEmpty()
  @IsArray()
  @Type(() => IngredientDto)
  @ValidateNested({ each: true })
  ingredients: IngredientDto[];
}
