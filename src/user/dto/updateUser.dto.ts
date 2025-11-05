import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './createUser.dto';
import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

export class updateUserDto extends PartialType(createUserDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  createdAt: string;
}
