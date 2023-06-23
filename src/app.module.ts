import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModule } from './api/recipe/recipe.module';
import { IngredientModule } from './api/ingredient/ingredient.module';
import { CommentModule } from './api/comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'recipe-app',
    }),
    RecipeModule,
    IngredientModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
