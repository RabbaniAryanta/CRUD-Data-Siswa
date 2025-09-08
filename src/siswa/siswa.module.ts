import { Module } from '@nestjs/common';
import { siswaController } from './siswa.controller';
import { siswaService } from './siswa.service';


@Module({
  controllers: [siswaController],
  providers: [siswaService]
})
export class siswaModule {}
