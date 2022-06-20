import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BillInquiryModule } from './modules/bill-inquiry/bill-inquiry.module';
import { BillPaymentModule } from './modules/bill-payment/bill-payment.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'postgresql',
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      autoLoadEntities: true,
    }),
    BillInquiryModule,
    BillPaymentModule,
  ],
})
export class AppModule {}
