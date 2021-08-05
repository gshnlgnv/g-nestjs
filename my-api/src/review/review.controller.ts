import { Body, Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { ProductModel } from '../product/product.model';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>){

  }

  @Delete(':id')
  async delete(@Param('id') id:string) {

  }

  @Get("byProduct/:productId")
  async getbyProduct(@Param('productId') productId: string) {

  }
}
