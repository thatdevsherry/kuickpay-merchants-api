import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';
import { BillDetailsDelegateResponse } from './bill-inquiry.interface';

@Injectable()
export class BillInquiryService {
  handleBillInquiry(
    billInquiryRequest: BillInquiryRequest,
  ): BillInquiryResponse {
    const billDetails = this.fetchBillDetails(
      billInquiryRequest.consumerNumber,
    );

    if (!billDetails) {
      throw new InternalServerErrorException();
    }
    return BillInquiryResponse.successResponse(
      billDetails,
      billInquiryRequest.reserved,
    );
  }

  fetchBillDetails(consumerNumber: string): BillDetailsDelegateResponse {
    // use consumerNumber to fetch bill details from external service
    return {
      dueDate: '2022-02-2',
      amount: '100',
      isPaid: false,
      billingMonth: '2022',
      consumerDetail: 'test User',
    };
  }
}
