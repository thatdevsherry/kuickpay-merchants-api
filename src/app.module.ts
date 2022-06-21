import { Module } from '@nestjs/common';
import { BillInquiryModule } from './modules/bill-inquiry/bill-inquiry.module';
import { BillPaymentModule } from './modules/bill-payment/bill-payment.module';

@Module({
  imports: [BillInquiryModule, BillPaymentModule],
})
export class AppModule {}
