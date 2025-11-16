import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MazfrenModule } from './mazfren/mazfren.module';
import { FrasleModule } from './frasle/frasle.module';
import { EquivalenciasModule } from './equivalencias/equivalencias.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [MazfrenModule, FrasleModule, EquivalenciasModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
