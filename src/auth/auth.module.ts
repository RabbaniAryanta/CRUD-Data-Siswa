import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtStrategy } from 'src/helper/jwt-strategy';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtStrategy],
  imports: [
    PrismaModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret-word',
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_IN) ?? 1440,
      }
    })
  ],
})

export class AuthModule { }
