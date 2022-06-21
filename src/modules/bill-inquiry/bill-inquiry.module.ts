import { Module } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { BillInquiryController } from './bill-inquiry.controller';
import { BillInquiryService } from './bill-inquiry.service';

@Module({
  imports: [],
  controllers: [BillInquiryController],
  providers: [BillInquiryService, PrismaService],
})
export class BillInquiryModule {}
