import { IsNotEmpty, IsString } from 'class-validator';

export class IngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
