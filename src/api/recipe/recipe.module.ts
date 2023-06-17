import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { RecipeRepository } from './recipe.repository';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipeRepository, RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
