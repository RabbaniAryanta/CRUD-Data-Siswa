import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TodosModule } from './todos/todos.module';
import { siswaModule } from './siswa/siswa.module';

import { PrismaModule } from 'prisma/prisma.module';



@Module({
  imports: [ PrismaModule, TodosModule, siswaModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
