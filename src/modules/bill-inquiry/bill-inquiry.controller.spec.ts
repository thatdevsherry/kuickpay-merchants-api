import { Test, TestingModule } from '@nestjs/testing';
import { BillInquiryController } from './bill-inquiry.controller';
import { BillInquiryService } from './bill-inquiry.service';

describe('BillInquiryController', () => {
  let controller: BillInquiryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillInquiryController],
      providers: [BillInquiryService],
    }).compile();

    controller = module.get<BillInquiryController>(BillInquiryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
