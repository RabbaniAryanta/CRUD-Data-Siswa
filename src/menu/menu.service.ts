import { Injectable } from '@nestjs/common';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { CreateMenuDto } from './dto/create-menu.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) { }

  async create(menu: CreateMenuDto) {
    try {
      const { name, price, category, description } = menu;
      const createdMenu = await this.prisma.menu.create({
        data: {
          name,
          price: price.toString(),
          description,
          category,
        },
      });
      return {
        succes: true,
        message: 'Menu created successfully',
        data: createdMenu,
      };
    } catch (error) {
      return {
        succes: false,
        message: `Something went wrong: ${error.message}`,
        data: null,
      }
    }
  }

  async findAll() {
    try {
      const menus = await this.prisma.menu.findMany();
      return {
        succes: true,
        message: 'Menus retrieved successfully',
        data: menus,
      };
    } catch (error) {
      return {
        succes: false,
        message: `Something went wrong: ${error.message}`,
        data: null,
      }
    }
  }
  async findOne(id: number) {
    try {
      const menu = await this.prisma.menu.findUnique({ where: { id: id } });
      if (!menu) {
        return {
          succes: false,
          message: 'Menu not found',
          data: null,
        };
      }
      return {
        succes: true,
        message: 'Menu retrieved successfully',
        data: menu,
      };
    } catch (error) {
      return {
        succes: false,
        message: `Something went wrong: ${error.message}`,
        data: null,
      }
    }
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      const { name, price, category, description } = updateMenuDto;
      const findMenu = await this.prisma.menu.findFirst({ where: { id: id } });
      if (!findMenu) {
        return {
          succes: false,
          message: 'Menu not found',
          data: null,
        };
      }
      const updatedMenu = await this.prisma.menu.update({
        where: { id: id },
        data: {
          name: name ?? findMenu.name,
          price: price ? price.toString() : findMenu.price,
          category: category ?? findMenu.category,
          description: description ?? findMenu.description,
        },
      });
      return {
        succes: true,
        message: 'Menu updated successfully',
        data: updatedMenu,
      };
    } catch (error) {
      return ({
        succes: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      })
    }
  }
  async remove(id: number) {
    try {
      const findMenu = await this.prisma.menu.findFirst({ where: { id: id } });
      if (!findMenu) {
        return {
          succes: false,
          message: 'Menu not found',
          data: null,
        };
      }
      const deletedMenu = await this.prisma.menu.delete({ where: { id: id } });
      return {
        succes: true,
        message: 'Menu deleted successfully',
        data: deletedMenu,
      };
    } catch (error) {
      return ({
        succes: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      })
    }
  }
}