import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentCreateDto } from './dto/CommentCreateDto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:id')
  async getRecipeComments(@Param('id') recipeId: number) {
    return await this.commentService.getRecipeComments(recipeId);
  }

  @Post()
  async createComment(@Body() comment: CommentCreateDto) {
    return await this.commentService.createComment(comment);
  }

  @Patch('/:id')
  async updateComment(
    @Param('id') commentId: number,
    @Body() comment: CommentCreateDto,
  ) {
    return await this.commentService.updateComment(commentId, comment);
  }
}
