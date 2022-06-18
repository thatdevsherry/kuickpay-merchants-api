import { Module } from '@nestjs/common';
import { BillPaymentController } from './bill-payment.controller';
import { BillPaymentService } from './bill-payment.service';

@Module({
  controllers: [BillPaymentController],
  providers: [BillPaymentService],
})
export class BillPaymentModule {}
