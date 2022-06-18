import { ResponseCode } from '../../common/types';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';

export interface BillInquiryHttpSpec {
  billInquiryRequest(
    billInquiryRequest: BillInquiryRequest,
  ): BillInquiryResponse;
}

export interface IBillInquiryResponse {
  responseCode: ResponseCode;
  consumerDetail?: string;
  billStatus?: string;
  dueDate?: Date;
  amountWithinDueDate?: string;
  amountAfterDueDate?: string;
  billingMonth?: string;
  datePaid?: string;
  amountPaid?: string;
  transactionAuthId?: string;
  reserved: string;
}
