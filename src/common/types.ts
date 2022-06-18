export enum ResponseCode {
  VALID_INQUIRY = '00',
  INVALID_INQUIRY = '01',
  TRANSACTION_NOT_ALLOWED = '02',
  BAD_TRANSACTION = '03',
  INVALID_DATA = '04',
  PROCESSING_FAILED = '05',
}

export enum BillStatus {
  UNPAID = 'U',
  PAID = 'P',
  BLOCKED = 'B',
}
