import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get('all')
  findAll(@Req() request: Request) {
    return this.UserService.findAll();
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action updates a #${id} user`;
  }

  @Get(':name')
  findOne(@Param('name') name: string): string {
    return `This action returns ${name} users`;
  }

  @Get()
  find(@Query('breed') breed: string, @Query('age') age: number): string {
    return `This action returns user filtered by age: ${age} and breed ${breed}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} user`;
  }
}
