import { Module } from '@nestjs/common';
import { FrasleService } from './frasle.service';
import { FrasleController } from './frasle.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [FrasleService],
  controllers: [FrasleController],
  imports: [PrismaModule],
})
export class FrasleModule {}
