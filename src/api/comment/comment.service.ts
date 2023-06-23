import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private commentRepository: CommentRepository) {}

  async getRecipeComments(recipeId: number) {
    return await this.commentRepository.getRecipeComments(recipeId);
  }
}
