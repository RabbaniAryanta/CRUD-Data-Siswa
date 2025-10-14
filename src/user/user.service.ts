import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  findall() {
    return this.prisma.user.findMany();
  }


  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }


  create(user: createUserDto) {
    return this.prisma.user.create({ data: user });
  }




  update(id: number, user: createUserDto) {
    return this.prisma.user.update({ data: user, where: { id: id } });
  }


  delete(id: number) {
    return this.prisma.user.delete({ where: { id: id } });
  }



}
