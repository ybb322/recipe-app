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

  async updateComment(commentId: number, comment: CommentCreateDto) {
    const result = await this.commentRepository.update(
      { id: commentId },
      comment,
    );
    console.log(result);
    return result;
  }

  async deleteComment(id: number) {
    const result = await this.commentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Comment not found');
    }

    return result;
  }
}
