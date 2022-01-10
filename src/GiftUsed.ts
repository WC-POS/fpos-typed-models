import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Gift } from './Gift';

@Index('PK_GiftUsed', ['giftUsedId'], { unique: true })
@Entity('GiftUsed', { schema: 'dbo' })
export class GiftUsed {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftUsedID',
    default: () => 'newsequentialid()',
  })
  giftUsedId!: string;

  @Column('int', { name: 'UseIndex' })
  useIndex!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @ManyToOne(() => Gift, (gift) => gift.giftUseds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'GiftID', referencedColumnName: 'giftId' }])
  gift!: Gift;
}
