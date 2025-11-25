import { Module } from '@nestjs/common';
import { EquivalencesService } from './equivalences.service';
import { EquivalencesController } from './equivalences.controller';

@Module({
  providers: [EquivalencesService],
  controllers: [EquivalencesController]
})
export class EquivalencesModule {}
