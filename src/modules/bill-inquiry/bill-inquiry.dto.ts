import { Expose } from 'class-transformer';
import { IsAlphanumeric, IsNumberString, MaxLength } from 'class-validator';
import { BillStatus, ResponseCode } from '../../common/types';
import {
  BillDetailsDelegateResponse,
  IBillInquiryResponse,
} from './bill-inquiry.interface';

export class BillInquiryRequest {
  @Expose({ name: 'userName' })
  @MaxLength(20)
  @IsAlphanumeric()
  username: string;

  @MaxLength(20)
  password: string;

  @IsNumberString()
  @MaxLength(18)
  consumerNumber: string;

  @IsAlphanumeric()
  @MaxLength(8)
  bankMnemonic: string;

  @MaxLength(200)
  reserved: string;
}

export class BillInquiryResponse {
  @Expose({ name: 'Response_Code' })
  responseCode: ResponseCode;

  @Expose({ name: 'Consumer_Detail' })
  consumerDetail?: string;

  @Expose({ name: 'Bill_Status' })
  billStatus?: string;

  @Expose({ name: 'Due_Date' })
  dueDate?: string;

  @Expose({ name: 'Amount_Within_DueDate' })
  amountWithinDueDate?: string;

  @Expose({ name: 'Amount_After_DueDate' })
  amountAfterDueDate?: string;

  @Expose({ name: 'Billing_Month' })
  billingMonth?: string;

  @Expose({ name: 'Date_Paid' })
  datePaid?: string;

  @Expose({ name: 'Amount_Paid' })
  amountPaid?: string;

  @Expose({ name: 'Tran_Auth_Id' })
  transactionAuthId?: string;

  @Expose({ name: 'Reserved' })
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

  static successResponse(
    delegateResponse: BillDetailsDelegateResponse,
    reserved: string,
  ) {
    return new BillInquiryResponse({
      responseCode: ResponseCode.VALID_INQUIRY,
      amountAfterDueDate: delegateResponse.amountAfterDueDate
        ? delegateResponse.amountAfterDueDate
        : delegateResponse.amountWithinDueDate,
      amountWithinDueDate: delegateResponse.amountWithinDueDate,
      billingMonth: delegateResponse.billingMonth,
      consumerDetail: delegateResponse.consumerDetail,
      billStatus: delegateResponse.isPaid ? BillStatus.PAID : BillStatus.UNPAID,
      dueDate: delegateResponse.dueDate,
      reserved,
      amountPaid: '',
      datePaid: '',
      transactionAuthId: '',
    });
  }
}
