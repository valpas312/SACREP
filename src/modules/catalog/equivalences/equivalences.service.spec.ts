import { Test, TestingModule } from '@nestjs/testing';
import { EquivalencesService } from './equivalences.service';

describe('EquivalencesService', () => {
  let service: EquivalencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquivalencesService],
    }).compile();

    service = module.get<EquivalencesService>(EquivalencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
