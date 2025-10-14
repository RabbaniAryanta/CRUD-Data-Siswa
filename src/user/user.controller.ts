import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Put,
  Delete,
  Query,
  Body,
} from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) { }
  @Get()
  findAll() {
    const user = this.UserService.findall()
    return {
      status: 200,
      success: true,
      message: 'data user',
      data: user

    }
  }

  @Post()
  create(@Body()data : createUserDto) {
    return {
      status: 200,
      success: true,
      message: 'data user telah berhasil dibuat',
      data : data
    } 
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
