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
import { BillInquiryRequest } from './bill-inquiry.dto';
import { BillInquiryHttpSpec } from './bill-inquiry.interface';
import { BillInquiryService } from './bill-inquiry.service';

@Controller('bill-inquiries')
export class BillInquiryController implements BillInquiryHttpSpec {
  constructor(private billInquiryService: BillInquiryService) {}

  @Post()
  @HttpCode(200)
  @UseInterceptors(ClassSerializerInterceptor)
  async billInquiryRequest(@Body() billInquiryRequest: BillInquiryRequest) {
    if (
      !isAuthenticated(billInquiryRequest.username, billInquiryRequest.password)
    ) {
      throw new ForbiddenException();
    }

    return await this.billInquiryService.handleBillInquiry(billInquiryRequest);
  }
}
