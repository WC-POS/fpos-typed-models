import { Column, Entity, Index } from 'typeorm';

@Index('PK__ScheduledProcess', ['scheduledProcessId'], { unique: true })
@Entity('_ScheduledProcess', { schema: 'dbo' })
export class ScheduledProcess {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduledProcessID',
    default: () => 'newsequentialid()',
  })
  scheduledProcessId!: string;

  @Column('nvarchar', {
    name: 'ScheduledProcessName',
    length: 50,
    default: () => "''",
  })
  scheduledProcessName!: string;

  @Column('datetime', { name: 'StartDate', default: () => 'getdate()' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('bit', { name: 'IsActive', default: () => '(0)' })
  isActive!: boolean;

  @Column('varbinary', { name: 'Parameters', nullable: true })
  parameters!: Buffer | null;

  @Column('nvarchar', {
    name: 'ScheduleString',
    nullable: true,
    length: 48,
    default: () => "''",
  })
  scheduleString!: string | null;

  @Column('uniqueidentifier', {
    name: 'EmployeeID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  employeeId!: string;

  @Column('datetime', { name: 'LastRun', nullable: true })
  lastRun!: Date | null;

  @Column('datetime', { name: 'LastQueued', nullable: true })
  lastQueued!: Date | null;
}
