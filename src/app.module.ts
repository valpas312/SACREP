import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './modules/catalog/catalog.module';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';
import { SharedModule } from './modules/shared/shared.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CatalogModule, EcommerceModule, SharedModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
