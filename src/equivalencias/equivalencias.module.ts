import { Module } from '@nestjs/common';
import { EquivalenciasService } from './equivalencias.service';
import { EquivalenciasController } from './equivalencias.controller';

@Module({
  providers: [EquivalenciasService],
  controllers: [EquivalenciasController]
})
export class EquivalenciasModule {}
