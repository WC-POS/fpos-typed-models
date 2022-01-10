import { Column, Entity, Index } from 'typeorm';

@Index('IX_CardDatePunchType', ['cardDate', 'punchType'], {})
@Index('IX_TimeCard', ['storeId', 'empId', 'cardDate'], {})
@Index('PK_TimeCard', ['timeCardId'], { unique: true })
@Entity('TimeCard', { schema: 'dbo' })
export class TimeCard {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TimeCardID',
    default: () => 'newsequentialid()',
  })
  timeCardId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'EmpID' })
  empId!: number;

  @Column('datetime', { name: 'CardDate' })
  cardDate!: Date;

  @Column('datetime', { name: 'RoundedDate', nullable: true })
  roundedDate!: Date | null;

  @Column('smallint', { name: 'PunchType' })
  punchType!: number;

  @Column('tinyint', { name: 'WorkCenter' })
  workCenter!: number;

  @Column('int', { name: 'BreakIndex', default: () => '(0)' })
  breakIndex!: number;

  @Column('uniqueidentifier', { name: 'ShadowTimeCardForID', nullable: true })
  shadowTimeCardForId!: string | null;

  @Column('datetime', { name: 'PaycomExportDate', nullable: true })
  paycomExportDate!: Date | null;

  @Column('bit', { name: 'IsUpdate', default: () => '(1)' })
  isUpdate!: boolean;
}
