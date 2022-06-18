import { Test, TestingModule } from '@nestjs/testing';
import { BillInquiryService } from './bill-inquiry.service';

describe('BillInquiryService', () => {
  let service: BillInquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillInquiryService],
    }).compile();

    service = module.get<BillInquiryService>(BillInquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
