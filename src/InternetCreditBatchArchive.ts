import { Column, Entity, Index } from 'typeorm';

@Index('PK_CreditBatchArchive', ['creditBatchArchiveId'], { unique: true })
@Entity('InternetCreditBatchArchive', { schema: 'dbo' })
export class InternetCreditBatchArchive {
  @Column('uniqueidentifier', { primary: true, name: 'CreditBatchArchiveID' })
  creditBatchArchiveId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'BatchDate' })
  batchDate!: Date;

  @Column('varbinary', { name: 'ReportData' })
  reportData!: Buffer;

  @Column('nvarchar', { name: 'MerchantID', length: 50, default: () => "' '" })
  merchantId!: string;

  @Column('varbinary', { name: 'ReceiptData', nullable: true })
  receiptData!: Buffer | null;
}
