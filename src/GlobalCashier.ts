import { Column, Entity, Index } from 'typeorm';

@Index('PK_GlobalCashier', ['globalCashierId'], { unique: true })
@Entity('GlobalCashier', { schema: 'dbo' })
export class GlobalCashier {
  @Column('uniqueidentifier', { primary: true, name: 'GlobalCashierID' })
  globalCashierId!: string;

  @Column('int', { name: 'GroupIndex', default: () => '(0)' })
  groupIndex!: number;

  @Column('datetime', { name: 'ChangeDate' })
  changeDate!: Date;

  @Column('int', { name: 'LastCashier' })
  lastCashier!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
