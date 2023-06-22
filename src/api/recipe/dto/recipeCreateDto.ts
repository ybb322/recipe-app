import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class RecipeCreateDto {
  @IsNumber()
  id: number;

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
}
