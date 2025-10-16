import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async findall() {
    return this.prisma.user.findMany()
  }


  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }


  async create(user: createUserDto) {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        },
      });
      return createdUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  update(id: number, user: createUserDto) {
    return this.prisma.user.update({ data: user, where: { id: id } });
  }


  delete(id: number) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
