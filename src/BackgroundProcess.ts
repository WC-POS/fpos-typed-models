import { Column, Entity, Index } from 'typeorm';

@Index('PK__BackgroundProcess', ['backgroundProcessId'], { unique: true })
@Entity('_BackgroundProcess', { schema: 'dbo' })
export class BackgroundProcess {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BackgroundProcessID',
    default: () => 'newsequentialid()',
  })
  backgroundProcessId!: string;

  @Column('nvarchar', {
    name: 'BackgroundProcessName',
    length: 50,
    default: () => "''",
  })
  backgroundProcessName!: string;

  @Column('datetime', { name: 'StartTime', default: () => 'getdate()' })
  startTime!: Date;

  @Column('datetime', { name: 'EndTime', nullable: true })
  endTime!: Date | null;

  @Column('varbinary', { name: 'Parameters', nullable: true })
  parameters!: Buffer | null;

  @Column('uniqueidentifier', {
    name: 'EmployeeID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  employeeId!: string;

  @Column('int', { name: 'Status', default: () => '(0)' })
  status!: number;

  @Column('nvarchar', { name: 'Messages', nullable: true })
  messages!: string | null;

  @Column('uniqueidentifier', { name: 'ScheduleID', nullable: true })
  scheduleId!: string | null;

  @Column('int', { name: 'Reason', nullable: true })
  reason!: number | null;
}
