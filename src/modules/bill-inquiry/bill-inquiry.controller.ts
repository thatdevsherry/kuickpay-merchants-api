import {
  Body,
  Controller,
  ForbiddenException,
  HttpCode,
  Post,
} from '@nestjs/common';
import { hardCodedAuth } from '../../common/auth';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';
import { BillInquiryHttpSpec } from './bill-inquiry.interface';
import { BillInquiryService } from './bill-inquiry.service';

@Controller('bill-inquiries')
export class BillInquiryController implements BillInquiryHttpSpec {
  constructor(private billInquiryService: BillInquiryService) {}

  @Post()
  @HttpCode(200)
  billInquiryRequest(
    @Body() billInquiryRequest: BillInquiryRequest,
  ): BillInquiryResponse {
    if (
      !hardCodedAuth(billInquiryRequest.username, billInquiryRequest.password)
    ) {
      throw new ForbiddenException();
    }

    return this.billInquiryService.handleBillInquiry(billInquiryRequest);
  }
}
