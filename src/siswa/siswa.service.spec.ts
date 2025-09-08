import { Test, TestingModule } from '@nestjs/testing';
import { siswaService } from './siswa.service';

describe('siswaService', () => {
  let service: siswaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [siswaService],
    }).compile();

    service = module.get<siswaService>(siswaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  }); 
});
