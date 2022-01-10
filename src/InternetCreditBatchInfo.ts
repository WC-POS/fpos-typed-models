import { Column, Entity, Index } from 'typeorm';

@Index('PK_InternetCreditBatchInfo', ['internetCreditBatchInfoId'], {
  unique: true,
})
@Entity('InternetCreditBatchInfo', { schema: 'dbo' })
export class InternetCreditBatchInfo {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'InternetCreditBatchInfoID',
    default: () => 'newsequentialid()',
  })
  internetCreditBatchInfoId!: string;

  @Column('int', { name: 'CurrentBatchNumber', default: () => '(0)' })
  currentBatchNumber!: number;

  @Column('int', { name: 'CurrentBatchItemNumber', default: () => '(0)' })
  currentBatchItemNumber!: number;

  @Column('bigint', { name: 'CurrentGiftCardNumber', default: () => '(0)' })
  currentGiftCardNumber!: string;
}
