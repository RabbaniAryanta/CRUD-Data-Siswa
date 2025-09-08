import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TodosModule } from './todos/todos.module';
import { siswaModule } from './siswa/siswa.module';

@Module({
  imports: [TodosModule, siswaModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
