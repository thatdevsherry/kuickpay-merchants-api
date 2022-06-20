import { ResponseCode } from '../../common/types';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';

export interface BillInquiryHttpSpec {
  billInquiryRequest(
    billInquiryRequest: BillInquiryRequest,
  ): Promise<BillInquiryResponse>;
}

export interface IBillInquiryResponse {
  responseCode: ResponseCode;
  consumerDetail?: string;
  billStatus?: string;
  dueDate?: string;
  amountWithinDueDate?: string;
  amountAfterDueDate?: string;
  billingMonth?: string;
  datePaid?: string;
  amountPaid?: string;
  transactionAuthId?: string;
  reserved: string;
}

export class BillDetailsDelegateResponse {
  dueDate: string;
  amountWithinDueDate: string;
  amountAfterDueDate?: string;
  isPaid: boolean;
  billingMonth: string;
  consumerDetail: string;
}
