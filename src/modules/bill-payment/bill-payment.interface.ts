import { BillPaymentRequest, BillPaymentResponse } from './bill-payment.dto';

export interface BillPaymentHttpSpec {
  billPayment(billPaymentRequest: BillPaymentRequest): BillPaymentResponse;
}
