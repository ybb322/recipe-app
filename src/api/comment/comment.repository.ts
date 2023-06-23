import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { NotFoundException } from '@nestjs/common';

export class CommentRepository {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  async getRecipeComments(recipeId: number) {
    const result = await this.commentRepository.find({
      where: {
        recipeId: recipeId,
      },
    });

    if (!result) {
      throw new NotFoundException('Recipe not found');
    }
    return result;
  }
}
