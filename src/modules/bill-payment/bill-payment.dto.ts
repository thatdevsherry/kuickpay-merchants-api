import { Expose } from 'class-transformer';
import { IsAlphanumeric, IsNumberString, MaxLength } from 'class-validator';
import { ResponseCode } from '../../common/types';
import { IBillPaymentResponse } from './bill-payment.interface';

export class BillPaymentRequest {
  @Expose({ name: 'userName' })
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @MaxLength(20)
  password: string;

  @IsNumberString(18)
  consumerNumber: string;

  @MaxLength(6)
  @IsNumberString()
  authId: string;

  @MaxLength(14)
  amount: string;

  @Expose({ name: 'tranDate' })
  @IsNumberString()
  @MaxLength(8)
  transactionDate: string;

  @Expose({ name: 'tranTime' })
  @IsNumberString()
  @MaxLength(6)
  transactionTime: string;

  @IsAlphanumeric()
  @MaxLength(8)
  bankMnemonic: string;

  @MaxLength(200)
  reserved: string;
}

export class BillPaymentResponse {
  @Expose({ name: 'Response_Code' })
  responseCode: ResponseCode;

  @Expose({ name: 'Identification Parameter' })
  identificationParameter: string;

  reserved: string;

  constructor(response: IBillPaymentResponse) {
    Object.assign(this, response);
  }

  static successResponse(reserved: string) {
    return new BillPaymentResponse({
      responseCode: ResponseCode.VALID_INQUIRY,
      identificationParameter: '0000',
      reserved,
    });
  }
}
