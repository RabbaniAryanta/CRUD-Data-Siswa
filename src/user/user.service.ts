import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private readonly users = [];

  create(users: User){
    this.users.push();
  }

  findAll(): string[] {
      return this.users;
  }
}
