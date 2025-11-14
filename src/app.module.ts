import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MazfrenModule } from './mazfren/mazfren.module';
import { FrasleModule } from './frasle/frasle.module';
import { EquivalenciasModule } from './equivalencias/equivalencias.module';

@Module({
  imports: [MazfrenModule, FrasleModule, EquivalenciasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
