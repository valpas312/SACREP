import { Controller, Get, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly service: ProductosService) {}

  @Get()
  findAll(
    @Query('fabricante') fabricante?: string,
    @Query('categoria') categoria?: string,
    @Query('codigo') codigo?: string,
    @Query('marca') marca?: 'mazfren' | 'frasle',
  ) {
    return this.service.listarProductos({
      fabricante,
      categoria,
      codigo,
      marca,
    });
  }
}
