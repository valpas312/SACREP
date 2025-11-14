import { Test, TestingModule } from '@nestjs/testing';
import { FrasleController } from './frasle.controller';

describe('FrasleController', () => {
  let controller: FrasleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrasleController],
    }).compile();

    controller = module.get<FrasleController>(FrasleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
