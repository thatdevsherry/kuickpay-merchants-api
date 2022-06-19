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

    const savedInquiry = this.saveBillInquiryToDatabase(
      billInquiryRequest,
      billDetails,
    );

    if (!savedInquiry) {
      throw new InternalServerErrorException();
    }

    return BillInquiryResponse.successResponse(
      billDetails,
      billInquiryRequest.reserved,
    );
  }

  // NOT IMPLEMENTED YET
  saveBillInquiryToDatabase(
    billInquiry: BillInquiryRequest,
    delegateResponse: BillDetailsDelegateResponse,
  ) {
    return true;
  }

  fetchBillDetails(consumerNumber: string): BillDetailsDelegateResponse {
    // use consumerNumber to fetch bill details from external service
    return {
      dueDate: '2022-02-2',
      amountWithinDueDate: '100',
      amountAfterDueDate: '999',
      isPaid: false,
      billingMonth: '2022',
      consumerDetail: 'test User',
    };
  }
}
