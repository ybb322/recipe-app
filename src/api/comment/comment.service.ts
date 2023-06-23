import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentCreateDto } from './dto/CommentCreateDto';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async getRecipeComments(recipeId: number) {
    return await this.commentRepository.getRecipeComments(recipeId);
  }

  async createComment(comment: CommentCreateDto) {
    return await this.commentRepository.createComment(comment);
  }
}
