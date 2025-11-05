import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Put,
  Patch,
  Delete,
  Query,
  Body,
} from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { resolve } from 'path';
import * as bcrypt from 'bcryptjs';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Get()
  async findAll() {
    try {
      const user = await this.UserService.findall();

      return {
        status: 200,
        success: true,
        message: 'User data found successfully',
        data: user,
      };
    } catch (error) {
      return {
        status: 400,
        success: false,
        message: `error when get user: ${error}`,
        data: null,
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
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message,
      };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: updateUserDto) {
    try {
      const result = await this.UserService.update(+id, data);
      return {
        status: 200,
        success: true,
        message: 'User updated successfully',
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message,
      };
    }
  }

  @Patch(':id')
  async partialUpdate(@Param('id') id: string, @Body() data: updateUserDto) {
    try {
      const result = await this.UserService.update(+id, data);
      return {
        status: 200,
        success: true,
        message: 'User updated successfully',
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message,
      };
    }
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
          data: user,
        };
      } else {
        return {
          status: 404,
          success: false,
          message: 'User not found',
          data: null,
        };
      }
    } catch (error) {
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.UserService.delete(+id);
      return {
        status: 200,
        success: true,
        message: 'User deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error.message.includes('No record was found for a delete')) {
        return {
          status: 404,
          success: false,
          message: 'User not found',
          data: null,
        };
      }
      return {
        status: 500,
        success: false,
        message: 'Internal server error',
        data: error.message,
      };
    }
  }
}
