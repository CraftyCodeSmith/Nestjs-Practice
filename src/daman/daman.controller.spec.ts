import { Test, TestingModule } from '@nestjs/testing';
import { DamanController } from './daman.controller';

describe('DamanController', () => {
  let controller: DamanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DamanController],
    }).compile();

    controller = module.get<DamanController>(DamanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
