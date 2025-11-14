import { Module } from '@nestjs/common';
import { FrasleService } from './frasle.service';
import { FrasleController } from './frasle.controller';

@Module({
  providers: [FrasleService],
  controllers: [FrasleController]
})
export class FrasleModule {}
