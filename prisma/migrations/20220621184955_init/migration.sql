-- CreateTable
CREATE TABLE "bill_inquiries" (
    "id" TEXT NOT NULL,
    "is_paid" BOOLEAN NOT NULL,
    "consumer_number" VARCHAR(18) NOT NULL,
    "consumer_detail" VARCHAR(30) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "amount_within_due_date" DOUBLE PRECISION NOT NULL,
    "amount_after_due_date" DOUBLE PRECISION NOT NULL,
    "billing_month" VARCHAR(4) NOT NULL,
    "bank_mnemonic" VARCHAR(8) NOT NULL,
    "reserved" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bill_inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill_payments" (
    "id" TEXT NOT NULL,
    "consumer_number" VARCHAR(18) NOT NULL,
    "bill_inquiry_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "auth_id" VARCHAR(6) NOT NULL,
    "transaction_datetime" TIMESTAMP(3) NOT NULL,
    "bank_mnemonic" VARCHAR(8) NOT NULL,
    "reserved" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bill_payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bill_payments" ADD CONSTRAINT "bill_payments_bill_inquiry_id_fkey" FOREIGN KEY ("bill_inquiry_id") REFERENCES "bill_inquiries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
