import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BeverageCount } from './BeverageCount';

@Index('PK_BeverageCountItem', ['beverageCountItemId'], { unique: true })
@Entity('BeverageCountItem', { schema: 'dbo' })
export class BeverageCountItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BeverageCountItemID',
    default: () => 'newsequentialid()',
  })
  beverageCountItemId!: string;

  @Column('nvarchar', { name: 'ItemName', length: 32, default: () => "''" })
  itemName!: string;

  @Column('int', { name: 'InCount', default: () => '(-1)' })
  inCount!: number;

  @Column('int', { name: 'OutCount', default: () => '(-1)' })
  outCount!: number;

  @ManyToOne(
    () => BeverageCount,
    (beverageCount) => beverageCount.beverageCountItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'BeverageCountID', referencedColumnName: 'beverageCountId' },
  ])
  beverageCount!: BeverageCount;
}
