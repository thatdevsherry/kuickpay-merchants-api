import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';

@Entity({
  customRepository: () => BillPaymentRepository,
})
export class BillPayment {
  @PrimaryKey()
  id: string;

  @Property({
    name: 'consumer_number',
  })
  consumerNumber: string;

  @Property({
    name: 'bill_inquiry_id',
  })
  billInquiryId: string;

  @Property()
  amount: number;

  @Property()
  authId: string;

  @Property({
    name: 'transaction_datetime',
  })
  transactionDatetime: Date;

  @Property({
    name: 'bank_mnemonic',
  })
  bankMnemonic: string;

  @Property()
  reserved: string;

  @Property({ name: 'created_at' })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), name: 'updated_at' })
  updatedAt: Date = new Date();

  [EntityRepositoryType]?: BillPaymentRepository;
}

export class BillPaymentRepository extends EntityRepository<BillPayment> {}
