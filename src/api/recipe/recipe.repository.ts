import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { ListFilterQueryDto } from '../shared/dto/ListFilterQueryDto';

export class RecipeRepository {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  async getAllRecipes(listFilterDto: ListFilterQueryDto) {
    const query = this.recipeRepository.createQueryBuilder('recipe');
    const { filter_by, filter_value } = listFilterDto;

    if (filter_value) {
      query.andWhere(`(LOWER(recipe.${filter_by}) LIKE LOWER(:filter_value))`, {
        filter_value: `%${filter_value}%`,
      });
    }
    console.log(await query.getMany());
    return await query.getMany();
  }
}
