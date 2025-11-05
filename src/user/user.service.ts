import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findall() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  async create(user: createUserDto) {
    try {
      const salt = await bcrypt.genSalt(2);
      const pass = await bcrypt.hash(user.password, salt);
      const createdUser = await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: pass,
        },
      });
      return createdUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  async update(id: number, user: updateUserDto) {
    try {
      const salt = await bcrypt.genSalt(2);
      const pass = await bcrypt.hash(user.password, salt);
      const updatedUser = await this.prisma.user.update({
        data: {
          name: user.name,
          email: user.email,
          password: pass,
        },
        where: { id: id },
      });
      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id: id } });
    } catch (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
}
