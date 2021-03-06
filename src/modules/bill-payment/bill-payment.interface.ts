import { ResponseCode } from '../../common/types';
import { BillPaymentRequest, BillPaymentResponse } from './bill-payment.dto';

export interface BillPaymentHttpSpec {
  billPayment(billPaymentRequest: BillPaymentRequest): BillPaymentResponse;
}

export interface IBillPaymentResponse {
  responseCode: ResponseCode;
  identificationParameter: string;
  reserved: string;
}
