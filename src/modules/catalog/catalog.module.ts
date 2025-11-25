import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { OemModule } from './oem/oem.module';
import { StockModule } from './stock/stock.module';
import { PricesModule } from './prices/prices.module';
import { EquivalencesModule } from './equivalences/equivalences.module';

@Module({
  imports: [BrandsModule, ProductsModule, CategoriesModule, VehiclesModule, OemModule, StockModule, PricesModule, EquivalencesModule]
})
export class CatalogModule {}
