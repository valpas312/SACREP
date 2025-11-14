import { Test, TestingModule } from '@nestjs/testing';
import { MazfrenController } from './mazfren.controller';

describe('MazfrenController', () => {
  let controller: MazfrenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MazfrenController],
    }).compile();

    controller = module.get<MazfrenController>(MazfrenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
