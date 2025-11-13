import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(createTransactionDto: CreateTransactionDto, userId?: number) {
    try {
      const { payment_method, orderName, detail } = createTransactionDto;

      const arrMenuId = detail.map(its => its.menuId);
      const selectedMenu = await this.prisma.menu.findMany({
        where: { id: { in: arrMenuId } }
      })

      const detailData: {
        quantity: number;
        purchase_price: string;
        menuId: number;
      } [] = [];

      const total: number = detail.reduce((total, menu) => {
        const { menuId, quantity } = menu;
        const findMenu = selectedMenu.find(its => its.id === menuId);
        detailData.push({
          quantity,
          menuId,
          purchase_price: findMenu?.price || 0
        });
        if (findMenu) return total + (quantity * findMenu.price);
        return 0;
      }, 0);

      const transaction = await this.prisma.transaction.create({
        data: {
          userId: userId,
          payment_method,
          order_name: orderName,
          total: total,
          detail: {
            
          }
      }
    }
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
