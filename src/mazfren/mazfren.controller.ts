import { Controller, Get, Param } from '@nestjs/common';
import { MazfrenService } from './mazfren.service';

@Controller('mazfren')
export class MazfrenController {
  constructor(private readonly service: MazfrenService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.service.findOne(codigo);
  }
}
