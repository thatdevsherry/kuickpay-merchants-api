import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentController } from './bill-payment.controller';

describe('BillPaymentController', () => {
  let controller: BillPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillPaymentController],
    }).compile();

    controller = module.get<BillPaymentController>(BillPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
