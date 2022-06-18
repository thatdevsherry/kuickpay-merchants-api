import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillInquiryModule } from './modules/bill-inquiry/bill-inquiry.module';
import { BillPaymentModule } from './modules/bill-payment/bill-payment.module';

@Module({
  imports: [BillInquiryModule, BillPaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
