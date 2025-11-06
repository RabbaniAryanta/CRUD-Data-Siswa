import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly bcryptService: BcryptService,
        private readonly jwtService: JwtService,
    ) {}
    async auth(authDto: AuthDto) {
      try {
        const { email, password } = authDto;

        const findUser = await this.prisma.user.findFirst({ where: { email }
        });
        if (!findUser) {
          return {
            statusCode: false,
            message: 'Invalid email',
            data: null,
          };
        }

        const isMatchPassword = await this.bcryptService.comparePassword(
          password,
          findUser.password,
        );

        if (!isMatchPassword) {
          return {
            statusCode: false,
            message: 'Invalid password',
            data: null,
          };
        }


        const token = this.jwtService.sign(
          { id: findUser.id, email: findUser.email, role: findUser.role }
        );

        return {
          statusCode: true,
          message: 'Login successful',
          data: { token, name: findUser.name,  role: findUser.role },
        };
      } catch (error) {
        return {
          statusCode: false,
          message: `Login failed: ${error.message}`,
          data: null,
        };
      }
    }

    // ---- Added CRUD methods expected by controller ----
    async create(createAuthDto: any): Promise<any> {
      const hashed = await this.bcryptService.hashPassword(createAuthDto.password);
      return this.prisma.user.create({
        data: {
          ...createAuthDto,
          password: hashed,
        },
      });
    }

    async findAll(): Promise<any[]> {
      return this.prisma.user.findMany();
    }

    async findOne(id: number): Promise<any> {
      return this.prisma.user.findUnique({ where: { id } });
    }

    async update(id: number, updateAuthDto: any): Promise<any> {
      const data: any = { ...updateAuthDto };
      if (updateAuthDto.password) {
        data.password = await this.bcryptService.hashPassword(updateAuthDto.password);
      }
      return this.prisma.user.update({
        where: { id },
        data,
      });
    }

    async remove(id: number): Promise<any> {
      return this.prisma.user.delete({ where: { id } });
    }
}
        