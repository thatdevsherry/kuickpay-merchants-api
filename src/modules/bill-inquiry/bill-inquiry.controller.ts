import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  ForbiddenException,
  HttpCode,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { isAuthenticated } from '../../common/auth';
import { BillInquiryRequest, BillInquiryResponse } from './bill-inquiry.dto';
import { BillInquiryHttpSpec } from './bill-inquiry.interface';
import { BillInquiryService } from './bill-inquiry.service';

@Controller('bill-inquiries')
export class BillInquiryController implements BillInquiryHttpSpec {
  constructor(private billInquiryService: BillInquiryService) {}

  @Post()
  @HttpCode(200)
  @UseInterceptors(ClassSerializerInterceptor)
  billInquiryRequest(
    @Body() billInquiryRequest: BillInquiryRequest,
  ): BillInquiryResponse {
    if (
      !isAuthenticated(billInquiryRequest.username, billInquiryRequest.password)
    ) {
      throw new ForbiddenException();
    }

    return this.billInquiryService.handleBillInquiry(billInquiryRequest);
  }
}
