import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentService } from './bill-payment.service';

describe('BillPaymentService', () => {
  let service: BillPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillPaymentService],
    }).compile();

    service = module.get<BillPaymentService>(BillPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
