import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class RecipeUpdateDto {
  @IsNumber()
  @IsOptional()
  ownerId: number;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  cuisine: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  cookingTime: number;
}
