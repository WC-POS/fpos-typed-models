import { Column, Entity, Index } from 'typeorm';

@Index('PK_OfflineLoyaltyQueue', ['offlineLoyaltyQueueId'], { unique: true })
@Entity('OfflineLoyaltyQueue', { schema: 'dbo' })
export class OfflineLoyaltyQueue {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'OfflineLoyaltyQueueID',
    default: () => 'newsequentialid()',
  })
  offlineLoyaltyQueueId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'TransactionType' })
  transactionType!: number;

  @Column('datetime', { name: 'LastUpdate' })
  lastUpdate!: Date;
}
