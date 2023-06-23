import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { NotFoundException } from '@nestjs/common';
import { CommentCreateDto } from './dto/CommentCreateDto';

export class CommentRepository {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  async getRecipeComments(recipeId: number) {
    const result = await this.commentRepository.find({
      where: {
        recipe: {
          id: recipeId,
        },
      },
    });
    if (!result) {
      throw new NotFoundException('Recipe not found');
    }
    return result;
  }

  async createComment(comment: CommentCreateDto) {
    const result = await this.commentRepository.insert(comment);
    console.log(result);
    return result;
  }
}
