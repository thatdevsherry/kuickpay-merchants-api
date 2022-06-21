import { Module } from '@nestjs/common';
import { PrismaService } from './common/prisma.service';
import { BillInquiryModule } from './modules/bill-inquiry/bill-inquiry.module';
import { BillPaymentModule } from './modules/bill-payment/bill-payment.module';

@Module({
  imports: [BillInquiryModule, BillPaymentModule],
  providers: [PrismaService],
})
export class AppModule {}
