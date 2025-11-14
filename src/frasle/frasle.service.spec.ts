import { Test, TestingModule } from '@nestjs/testing';
import { FrasleService } from './frasle.service';

describe('FrasleService', () => {
  let service: FrasleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrasleService],
    }).compile();

    service = module.get<FrasleService>(FrasleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
