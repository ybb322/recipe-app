import { IsNumber, IsOptional, IsString } from 'class-validator';
import { SortDirectionEnum } from './SortDirectionEnum';

export class ListFilterQueryDto {
  @IsOptional()
  filter_by: string;

  @IsOptional()
  filter_value: string;

  @IsOptional()
  @IsString()
  sort_direction: SortDirectionEnum;

  @IsString()
  @IsOptional()
  sort_by: string;

  @IsOptional()
  @IsNumber()
  offset: number;

  @IsOptional()
  @IsNumber()
  limit: number;
}
