import { Injectable, NotImplementedException } from '@nestjs/common';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';

@Injectable()
export class BillInquiryService {
  handleBillInquiry(
    billInquiryRequest: BillInquiryRequest,
  ): BillInquiryResponse {
    throw new NotImplementedException();
  }
}
