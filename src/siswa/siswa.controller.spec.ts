import { Test, TestingModule } from '@nestjs/testing';
import { siswaController } from './siswa.controller';
describe('TodosController', () => {
  let controller: siswaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [siswaController],
    }).compile();

    controller = module.get<siswaController>(siswaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
