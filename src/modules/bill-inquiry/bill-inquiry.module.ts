import { Module } from '@nestjs/common';
import { BillInquiryController } from './bill-inquiry.controller';
import { BillInquiryService } from './bill-inquiry.service';

@Module({
  controllers: [BillInquiryController],
  providers: [BillInquiryService],
})
export class BillInquiryModule {}
