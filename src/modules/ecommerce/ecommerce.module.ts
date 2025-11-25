import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AddressesModule } from './addresses/addresses.module';
import { CartsModule } from './carts/carts.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [CustomersModule, AddressesModule, CartsModule, CartItemsModule, OrdersModule, OrderItemsModule, PaymentsModule]
})
export class EcommerceModule {}
