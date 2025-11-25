import { Test, TestingModule } from '@nestjs/testing';
import { EquivalencesController } from './equivalences.controller';

describe('EquivalencesController', () => {
  let controller: EquivalencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquivalencesController],
    }).compile();

    controller = module.get<EquivalencesController>(EquivalencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
