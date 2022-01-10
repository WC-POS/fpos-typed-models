import { Column, Entity, Index } from 'typeorm';

@Index('PK_SkinScheduled', ['skinScheduleId'], { unique: true })
@Entity('SkinSchedule', { schema: 'dbo' })
export class SkinSchedule {
  @Column('uniqueidentifier', { primary: true, name: 'SkinScheduleID' })
  skinScheduleId!: string;

  @Column('uniqueidentifier', { name: 'SkinID' })
  skinId!: string;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate' })
  endDate!: Date;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;
}
