import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { WageHistory } from './WageHistory';

@Index('IX_WageHistoryWage', ['wageHistoryId'], {})
@Index('PK_WageHistoryWage', ['wageHistoryWageId'], { unique: true })
@Entity('WageHistoryWage', { schema: 'dbo' })
export class WageHistoryWage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'WageHistoryWageID',
    default: () => 'newsequentialid()',
  })
  wageHistoryWageId!: string;

  @Column('uniqueidentifier', { name: 'WageHistoryID' })
  wageHistoryId!: string;

  @Column('int', { name: 'WageHistoryWageIndex', default: () => '(0)' })
  wageHistoryWageIndex!: number;

  @Column('int', { name: 'OldWorkCenter' })
  oldWorkCenter!: number;

  @Column('int', { name: 'OldOvertimeRate' })
  oldOvertimeRate!: number;

  @Column('int', { name: 'OldRegularRate' })
  oldRegularRate!: number;

  @Column('int', { name: 'NewWorkCenter' })
  newWorkCenter!: number;

  @Column('int', { name: 'NewOvertimeRate' })
  newOvertimeRate!: number;

  @Column('int', { name: 'NewRegularRate' })
  newRegularRate!: number;

  @ManyToOne(() => WageHistory, (wageHistory) => wageHistory.wageHistoryWages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([
    { name: 'WageHistoryID', referencedColumnName: 'wageHistoryId' },
  ])
  wageHistory!: WageHistory;
}
