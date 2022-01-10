import { Column, Entity, Index } from 'typeorm';

@Index('IX_InternetCreditBatch_DataVersion', ['dataVersion'], {})
@Index('PK_InternetCreditBatch', ['internetBatchId'], { unique: true })
@Entity('InternetCreditBatch', { schema: 'dbo' })
export class InternetCreditBatch {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'InternetBatchID',
    default: () => 'newsequentialid()',
  })
  internetBatchId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('tinyint', { name: 'IsCaptured' })
  isCaptured!: number;

  @Column('tinyint', { name: 'IsVoided' })
  isVoided!: number;

  @Column('datetime', { name: 'ProcessDate' })
  processDate!: Date;

  @Column('binary', { name: 'AccountNumber', length: 40, default: () => '(0)' })
  accountNumber!: Buffer;

  @Column('binary', {
    name: 'ExpirationDate',
    length: 16,
    default: () => '(0)',
  })
  expirationDate!: Buffer;

  @Column('binary', { name: 'Track2', length: 48, default: () => '(0)' })
  track2!: Buffer;

  @Column('binary', { name: 'ApprovalCode', length: 32 })
  approvalCode!: Buffer;

  @Column('binary', { name: 'ReferenceData', length: 40 })
  referenceData!: Buffer;

  @Column('binary', { name: 'ReferenceNumber', length: 24 })
  referenceNumber!: Buffer;

  @Column('tinyint', { name: 'OpType' })
  opType!: number;

  @Column('smallint', { name: 'EmployeeID' })
  employeeId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'SaleAmount' })
  saleAmount!: number;

  @Column('int', { name: 'TipAmount' })
  tipAmount!: number;

  @Column('nvarchar', { name: 'MerchantID', length: 50, default: () => "' '" })
  merchantId!: string;

  @Column('int', { name: 'BatchNumber', default: () => '(0)' })
  batchNumber!: number;

  @Column('int', { name: 'BatchItemNumber', default: () => '(0)' })
  batchItemNumber!: number;

  @Column('int', { name: 'BatchRevisionNumber', default: () => '(0)' })
  batchRevisionNumber!: number;

  @Column('tinyint', { name: 'IsOffline', default: () => '(0)' })
  isOffline!: number;

  @Column('int', { name: 'OfflineSaleAmount', default: () => '(0)' })
  offlineSaleAmount!: number;

  @Column('int', { name: 'OfflineTipAmount', default: () => '(0)' })
  offlineTipAmount!: number;

  @Column('binary', { name: 'AdditionalInfo', nullable: true, length: 512 })
  additionalInfo!: Buffer | null;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;
}
