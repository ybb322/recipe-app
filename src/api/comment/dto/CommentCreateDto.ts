import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CommentCreateDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  rating: number;
}
