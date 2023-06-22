import { IsNumber, IsPositive, IsString } from 'class-validator';

export class RecipeCreateDto {
  @IsNumber()
  id: number;

  @IsNumber()
  ownerId: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  cuisine: string;

  @IsNumber()
  @IsPositive()
  cookingTime: number;
}
