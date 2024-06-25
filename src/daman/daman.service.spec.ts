import { Test, TestingModule } from '@nestjs/testing';
import { DamanService } from './daman.service';

describe('DamanService', () => {
  let service: DamanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DamanService],
    }).compile();

    service = module.get<DamanService>(DamanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
