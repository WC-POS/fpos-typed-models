import { Column, Entity, Index } from 'typeorm';

@Index('PK_POSShift', ['posShiftId'], { unique: true })
@Entity('POSShift', { schema: 'dbo' })
export class PosShift {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'POSShiftID',
    default: () => 'newsequentialid()',
  })
  posShiftId!: string;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('smallint', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'DrawerNumber', default: () => '(0)' })
  drawerNumber!: number;

  @Column('int', { name: 'StartEmpID', default: () => '(0)' })
  startEmpId!: number;

  @Column('int', { name: 'EndEmpID', default: () => '(0)' })
  endEmpId!: number;

  @Column('int', { name: 'StartAmount', default: () => '(0)' })
  startAmount!: number;

  @Column('int', { name: 'EndAmount', default: () => '(0)' })
  endAmount!: number;

  @Column('int', { name: 'FloatAmount', default: () => '(0)' })
  floatAmount!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('smallint', { name: 'ShiftType', default: () => '(0)' })
  shiftType!: number;
}
