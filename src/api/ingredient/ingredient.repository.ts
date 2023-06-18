import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.entity';
import { Repository } from 'typeorm';
import { IngredientDto } from './dto/IngredientDto';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

export class IngredientRepository {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async getAllIngredients(listFilterDto: ListFilterQueryDto) {
    const query = this.ingredientRepository.createQueryBuilder('ingredient');
    const { filter_by, filter_value, sort_by, sort_direction, offset, limit } =
      listFilterDto;

    if (filter_by && filter_value) {
      query.andWhere(
        `(LOWER(ingredient.${filter_by}) LIKE LOWER(:filter_value))`,
        {
          filter_value: `%${filter_value}%`,
        },
      );
    }

    if (sort_by && sort_direction) {
      query.orderBy(sort_by, sort_direction);
    }

    return await query.getMany();
  }

  async addIngredients(ingredients: Array<IngredientDto>) {
    console.log(ingredients);
    return await this.ingredientRepository.upsert(ingredients, {
      conflictPaths: ['name'],
      skipUpdateIfNoValuesChanged: true,
    });
  }
}
