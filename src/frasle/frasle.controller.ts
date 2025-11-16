import { Controller, Get, Param } from '@nestjs/common';
import { FrasleService } from './frasle.service';

@Controller('frasle')
export class FrasleController {
  constructor(private readonly service: FrasleService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.service.findOne(codigo);
  }
}
