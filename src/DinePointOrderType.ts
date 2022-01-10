import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointOrderType', ['orderTypeIndex'], { unique: true })
@Entity('DinePointOrderType', { schema: 'dbo' })
export class DinePointOrderType {
  @Column('int', { primary: true, name: 'OrderTypeIndex' })
  orderTypeIndex!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'OrderType', nullable: true, length: 50 })
  orderType!: string | null;

  @Column('int', { name: 'ForgiveTax', default: () => '(0)' })
  forgiveTax!: number;
}
