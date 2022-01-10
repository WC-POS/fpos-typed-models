import { Column, Entity, Index } from 'typeorm';

@Index('IX_CreditBatch_DataVersion', ['dataVersion'], {})
@Index('PK_CreditBatch', ['batchId'], { unique: true })
@Entity('CreditBatch', { schema: 'dbo' })
export class CreditBatch {
  @Column('uniqueidentifier', { primary: true, name: 'BatchID' })
  batchId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'TransSeq' })
  transSeq!: number;

  @Column('binary', { name: 'AccountNumber', length: 40 })
  accountNumber!: Buffer;

  @Column('binary', { name: 'AppCd', length: 24, default: () => '(0)' })
  appCd!: Buffer;

  @Column('binary', {
    name: 'ExpirationDate',
    length: 16,
    default: () => '(0)',
  })
  expirationDate!: Buffer;

  @Column('int', { name: 'AuthAmount' })
  authAmount!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('datetime', { name: 'AuthorizeDate', nullable: true })
  authorizeDate!: Date | null;

  @Column('binary', { name: 'BatchRecord', length: 520, default: () => '(0)' })
  batchRecord!: Buffer;

  @Column('int', { name: 'BatchNumber', default: () => '(0)' })
  batchNumber!: number;

  @Column('bit', { name: 'IsSettled', default: () => '(0)' })
  isSettled!: boolean;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;
}
