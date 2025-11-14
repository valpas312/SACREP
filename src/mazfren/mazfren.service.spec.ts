import { Test, TestingModule } from '@nestjs/testing';
import { MazfrenService } from './mazfren.service';

describe('MazfrenService', () => {
  let service: MazfrenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MazfrenService],
    }).compile();

    service = module.get<MazfrenService>(MazfrenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
