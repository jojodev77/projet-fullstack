import { Test, TestingModule } from '@nestjs/testing';
import { MissController } from './miss.controller';

describe('Miss Controller', () => {
  let controller: MissController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissController],
    }).compile();

    controller = module.get<MissController>(MissController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
