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
  imports: [PrismaModule, BcryptService, ConfigModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET || 'BambangHartono',
    signOptions: { expiresIn: '1h' },
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
