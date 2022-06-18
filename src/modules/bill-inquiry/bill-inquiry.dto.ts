import { Expose } from 'class-transformer';
import { IsAlphanumeric, IsNumberString, MaxLength } from 'class-validator';
import { ResponseCode } from '../../common/types';
import { IBillInquiryResponse } from './bill-inquiry.interface';

export class BillInquiryRequest {
  @Expose({ name: 'userName' })
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @MaxLength(20)
  password: string;

  @IsNumberString(18)
  consumerNumber: string;

  @IsAlphanumeric()
  @MaxLength(8)
  bankMnemonic: string;

  @MaxLength(200)
  reserved: string;
}

export class BillInquiryResponse {
  responseCode: ResponseCode;
  consumerDetail?: string;
  billStatus?: string;
  dueDate?: Date;
  amountWithinDueDate?: string;
  amountAfterDueDate?: string;
  billingMonth?: string;
  datePaid?: string;
  amountPaid?: string;
  transactionAuthId?: string;
  reserved: string;

  constructor(response: IBillInquiryResponse) {
    Object.assign(this, response);
  }

  static badTransaction(reserved: string) {
    return new BillInquiryResponse({
      responseCode: ResponseCode.BAD_TRANSACTION,
      reserved,
    }) as IBillInquiryResponse;
  }
}
