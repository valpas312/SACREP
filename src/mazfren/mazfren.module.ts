import { Module } from '@nestjs/common';
import { MazfrenService } from './mazfren.service';
import { MazfrenController } from './mazfren.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [MazfrenService],
  controllers: [MazfrenController],
  imports: [PrismaModule],
})
export class MazfrenModule {}
