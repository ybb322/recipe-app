import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class IngredientDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
