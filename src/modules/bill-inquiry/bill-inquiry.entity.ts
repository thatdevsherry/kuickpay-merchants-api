import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';

@Entity({
  customRepository: () => BillInquiryRepository,
})
export class BillInquiry {
  @PrimaryKey()
  id: string;

  @Property({
    name: 'is_paid',
  })
  billStatus: boolean;

  @Property({
    name: 'consumer_number',
  })
  consumerNumber: string;

  @Property({
    name: 'consumer_detail',
  })
  consumerDetail: string;

  @Property({
    name: 'due_date',
  })
  dueDate: Date;

  @Property({
    name: 'amount_within_due_date',
  })
  amountWithinDueDate: number;

  @Property({
    name: 'amount_after_due_date',
  })
  amountAfterDueDate: number;

  @Property({
    name: 'billing_month',
  })
  billingMonth: string;

  @Property({
    name: 'bank_mnemonic',
  })
  bankMnemonic: string;

  @Property()
  reserved: string;

  @Property({
    name: 'created_at',
  })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), name: 'updated_at' })
  updatedAt: Date = new Date();

  [EntityRepositoryType]?: BillInquiryRepository;
}

export class BillInquiryRepository extends EntityRepository<BillInquiry> {}
