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
import { resolve } from 'path';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) { }
  @Get()
  async findAll() {
    try {
      const user = await this.UserService.findall();
      return {
        status: 200,
        success: true,
        message: "User daa found successfully",
        data: user
      };
    } catch (error) {
      return {
        status: 400,
        success: false,
        message: `error when get user: ${error}`,
        data: null
      };
    }
  }

  @Post()
  async create(@Body() data: createUserDto) {
    try {
      const result = await this.UserService.create(data);
      return {
        status: 200,
        success: true,
        message: 'User created successfully',
        data: result
      };
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message
      };
    }
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action updates a #${id} user`;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.UserService.findOne(+id);
      if (user) {
        return {
          status: 200,
          success: true,
          message: `User found with name ${user.name}`,
          data: user
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'User not found',
          data: null
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message
      };
    }
  }

  @Get('search')
  find(@Query('breed') breed: string, @Query('age') age: number): string {
    return `This action returns user filtered by age: ${age} and breed ${breed}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} user`;
  }
}
