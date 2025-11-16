import { Controller, Get } from '@nestjs/common';
import { EquivalenciasService } from './equivalencias.service';

@Controller('equivalencias')
export class EquivalenciasController {
  constructor(private service: EquivalenciasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
