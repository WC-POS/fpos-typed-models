import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointConfig', ['storeId'], { unique: true })
@Entity('DinePointConfig', { schema: 'dbo' })
export class DinePointConfig {
  @Column('int', { primary: true, name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'DayDivide' })
  dayDivide!: Date;
}
