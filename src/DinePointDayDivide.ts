import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointDayDivide_1', ['businessDate'], { unique: true })
@Entity('DinePointDayDivide', { schema: 'dbo' })
export class DinePointDayDivide {
  @Column('datetime', { primary: true, name: 'BusinessDate' })
  businessDate!: Date;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate', default: () => '(0)' })
  endDate!: Date;
}
