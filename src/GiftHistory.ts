import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Gift } from './Gift';

@Index('PK_GiftHistory', ['giftHistoryId'], { unique: true })
@Entity('GiftHistory', { schema: 'dbo' })
export class GiftHistory {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftHistoryID',
    default: () => 'newsequentialid()',
  })
  giftHistoryId!: string;

  @Column('int', { name: 'HistoryIndex', default: () => '(0)' })
  historyIndex!: number;

  @Column('int', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('int', { name: 'CheckNumber', default: () => '(0)' })
  checkNumber!: number;

  @Column('int', { name: 'Amount', default: () => '(0)' })
  amount!: number;

  @Column('datetime', { name: 'HistoryDate' })
  historyDate!: Date;

  @ManyToOne(() => Gift, (gift) => gift.giftHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'GiftID', referencedColumnName: 'giftId' }])
  gift!: Gift;
}
