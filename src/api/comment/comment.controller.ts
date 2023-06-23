import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:id')
  async getRecipeComments(@Param('id') recipeId: number) {
    return await this.commentService.getRecipeComments(recipeId);
  }
}
