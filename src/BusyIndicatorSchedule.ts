import { Column, Entity, Index } from 'typeorm';

@Index('PK_BusyIndicatorScheduled', ['busyIndicatorScheduleId'], {
  unique: true,
})
@Entity('BusyIndicatorSchedule', { schema: 'dbo' })
export class BusyIndicatorSchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BusyIndicatorScheduleID',
  })
  busyIndicatorScheduleId!: string;

  @Column('uniqueidentifier', { name: 'BusyIndicatorID' })
  busyIndicatorId!: string;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate' })
  endDate!: Date;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;
}
