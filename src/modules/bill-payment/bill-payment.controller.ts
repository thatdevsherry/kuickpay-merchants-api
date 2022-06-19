import { Body, Controller, Post } from '@nestjs/common';
import { BillPaymentRequest, BillPaymentResponse } from './bill-payment.dto';
import { BillPaymentHttpSpec } from './bill-payment.interface';
import { BillPaymentService } from './bill-payment.service';

@Controller('bill-payments')
export class BillPaymentController implements BillPaymentHttpSpec {
  constructor(private billPaymentService: BillPaymentService) {}

  @Post()
  billPayment(
    @Body() billPaymentRequest: BillPaymentRequest,
  ): BillPaymentResponse {
    return this.billPaymentService.handleBillPayment(billPaymentRequest);
  }
}
