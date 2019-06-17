import { Test, TestingModule } from '@nestjs/testing';
import { MissService } from './miss.service';

describe('MissService', () => {
  let service: MissService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissService],
    }).compile();

    service = module.get<MissService>(MissService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
