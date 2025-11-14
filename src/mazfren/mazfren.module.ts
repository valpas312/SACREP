import { Module } from '@nestjs/common';
import { MazfrenService } from './mazfren.service';
import { MazfrenController } from './mazfren.controller';

@Module({
  providers: [MazfrenService],
  controllers: [MazfrenController]
})
export class MazfrenModule {}
