import { Column, Entity, Index, OneToMany } from 'typeorm';
import { WageHistoryWage } from './WageHistoryWage';

@Index('PK_WageHistory', ['wageHistoryId'], { unique: true })
@Entity('WageHistory', { schema: 'dbo' })
export class WageHistory {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'WageHistoryID',
    default: () => 'newsequentialid()',
  })
  wageHistoryId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('datetime', { name: 'WageDate' })
  wageDate!: Date;

  @OneToMany(
    () => WageHistoryWage,
    (wageHistoryWage) => wageHistoryWage.wageHistory
  )
  wageHistoryWages!: WageHistoryWage[];
}
