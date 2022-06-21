import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';
import { BillDetailsDelegateResponse } from './bill-inquiry.interface';

@Injectable()
export class BillInquiryService {
  constructor(private prisma: PrismaService) {}

  async handleBillInquiry(billInquiryRequest: BillInquiryRequest) {
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
