import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { BillPaymentRequest, BillPaymentResponse } from './bill-payment.dto';
import { BillPaymentHttpSpec } from './bill-payment.interface';

@Controller('bill-payments')
export class BillPaymentController implements BillPaymentHttpSpec {
  @Post()
  billPayment(
    @Body() _billPaymentRequest: BillPaymentRequest,
  ): BillPaymentResponse {
    throw new NotImplementedException();
  }
}
