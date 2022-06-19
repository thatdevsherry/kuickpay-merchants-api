import { Injectable } from '@nestjs/common';
import { BillPaymentRequest, BillPaymentResponse } from './bill-payment.dto';

@Injectable()
export class BillPaymentService {
  handleBillPayment(
    billPaymentRequest: BillPaymentRequest,
  ): BillPaymentResponse {
    return BillPaymentResponse.successResponse(billPaymentRequest.reserved);
  }
}
