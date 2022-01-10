import { Column, Entity, Index } from 'typeorm';

@Index('IX_PunchPair_EmpID', ['empId'], {})
@Index('IX_PunchPair_NonRoundedTimeIn', ['nonRoundedTimeIn'], {})
@Index('IX_PunchPair_NonRoundedTimeOut', ['nonRoundedTimeOut'], {})
@Index('IX_PunchPair_PayPeriodEnd', ['payPeriodEnd'], {})
@Index('IX_PunchPair_PayPeriodStart', ['payPeriodStart'], {})
@Index('IX_PunchPair_PayWeekEnd', ['payWeekEnd'], {})
@Index('IX_PunchPair_PayWeekStart', ['payWeekStart'], {})
@Index('IX_PunchPair_TimeIn', ['timeIn'], {})
@Index('IX_PunchPair_TimeOut', ['timeOut'], {})
@Index('PK_PunchPair', ['punchPairId'], { unique: true })
@Entity('PunchPair', { schema: 'dbo' })
export class PunchPair {
  @Column('uniqueidentifier', { primary: true, name: 'PunchPairID' })
  punchPairId!: string;

  @Column('uniqueidentifier', { name: 'PunchPairShiftID', nullable: true })
  punchPairShiftId!: string | null;

  @Column('uniqueidentifier', { name: 'PunchPairJobCodeID', nullable: true })
  punchPairJobCodeId!: string | null;

  @Column('smallint', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'StoreID', nullable: true })
  storeId!: number | null;

  @Column('datetime', { name: 'ShiftDate' })
  shiftDate!: Date;

  @Column('datetime', { name: 'TimeIn' })
  timeIn!: Date;

  @Column('datetime', { name: 'RoundedTimeIn', nullable: true })
  roundedTimeIn!: Date | null;

  @Column('datetime', { name: 'TimeOut', nullable: true })
  timeOut!: Date | null;

  @Column('datetime', { name: 'RoundedTimeOut', nullable: true })
  roundedTimeOut!: Date | null;

  @Column('datetime', { name: 'PayPeriodStart' })
  payPeriodStart!: Date;

  @Column('datetime', { name: 'PayPeriodEnd' })
  payPeriodEnd!: Date;

  @Column('tinyint', { name: 'JobCode' })
  jobCode!: number;

  @Column('smallint', { name: 'InType' })
  inType!: number;

  @Column('smallint', { name: 'OutType', nullable: true })
  outType!: number | null;

  @Column('int', { name: 'BreakIndex', nullable: true })
  breakIndex!: number | null;

  @Column('decimal', {
    name: 'RegHours',
    precision: 8,
    scale: 4,
    default: () => '(0)',
  })
  regHours!: number;

  @Column('decimal', {
    name: 'OTHours',
    precision: 8,
    scale: 4,
    default: () => '(0)',
  })
  otHours!: number;

  @Column('decimal', {
    name: 'MealHours',
    precision: 8,
    scale: 4,
    default: () => '(0)',
  })
  mealHours!: number;

  @Column('decimal', {
    name: 'RegRate',
    precision: 11,
    scale: 4,
    default: () => '(0)',
  })
  regRate!: number;

  @Column('decimal', {
    name: 'OTRate',
    precision: 11,
    scale: 4,
    default: () => '(0)',
  })
  otRate!: number;

  @Column('bit', { name: 'IsDirty', default: () => '(0)' })
  isDirty!: boolean;

  @Column('nvarchar', {
    name: 'JobCodeDescription',
    nullable: true,
    length: 20,
  })
  jobCodeDescription!: string | null;

  @Column('bit', { name: 'IsBreakPaid', default: () => '(0)' })
  isBreakPaid!: boolean;

  @Column('uniqueidentifier', { name: 'ShiftID', default: () => 'newid()' })
  shiftId!: string;

  @Column('uniqueidentifier', {
    name: 'JobCodeSpanID',
    default: () => 'newid()',
  })
  jobCodeSpanId!: string;

  @Column('uniqueidentifier', { name: 'LaborRuleID', nullable: true })
  laborRuleId!: string | null;

  @Column('decimal', {
    name: 'Hours',
    precision: 8,
    scale: 4,
    default: () => '(0)',
  })
  hours!: number;

  @Column('decimal', {
    name: 'Rate',
    precision: 11,
    scale: 4,
    default: () => '(0)',
  })
  rate!: number;

  @Column('decimal', {
    name: 'Wages',
    precision: 11,
    scale: 4,
    default: () => '(0)',
  })
  wages!: number;

  @Column('bit', { name: 'IsOpen', default: () => '(0)' })
  isOpen!: boolean;

  @Column('bit', { name: 'IsMeal', default: () => '(0)' })
  isMeal!: boolean;

  @Column('datetime', { name: 'NonRoundedTimeIn', nullable: true })
  nonRoundedTimeIn!: Date | null;

  @Column('datetime', { name: 'NonRoundedTimeOut', nullable: true })
  nonRoundedTimeOut!: Date | null;

  @Column('datetime', { name: 'PayWeekStart', default: () => "'1753-01-01'" })
  payWeekStart!: Date;

  @Column('datetime', { name: 'PayWeekEnd', default: () => "'1753-01-01'" })
  payWeekEnd!: Date;
}
