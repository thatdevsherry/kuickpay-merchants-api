import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BillInquiryController } from './bill-inquiry.controller';
import { BillInquiry } from './bill-inquiry.entity';
import { BillInquiryService } from './bill-inquiry.service';

@Module({
  imports: [MikroOrmModule.forFeature([BillInquiry])],
  controllers: [BillInquiryController],
  providers: [BillInquiryService],
})
export class BillInquiryModule {}
