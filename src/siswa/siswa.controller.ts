import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import * as siswaService from './siswa.service';

@Controller('siswa')
export class siswaController {
  constructor(private readonly ss: siswaService.siswaService) {}

  @Get()
  getAllTodos() {
    return this.ss.findAll();
  }

  @Get(':nisn')
  getTodoById(@Param('nisn') nisn: string) {
    return this.ss.findOne(nisn);
  }

  @Post()
  createTodo(@Body() s: siswaService.Siswa) {
    return this.ss.create(s);
  }

  @Put(':nisn')
  updateTodo(@Param('nisn') nisn: string, @Body() s: siswaService.Siswa) {
    return this.ss.update(nisn, s);
  }
  @Delete(':nisn')
  removeTodo(@Param('nisn') nisn: string) {
    this.ss.remove(nisn);
  }
}
