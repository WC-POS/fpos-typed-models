import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Schedule } from './Schedule';

@Index('IX_ScheduleItem', ['scheduleId'], {})
@Index('PK_ScheduleItem', ['scheduleItemId'], { unique: true })
@Entity('ScheduleItem', { schema: 'dbo' })
export class ScheduleItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduleItemID',
    default: () => 'newsequentialid()',
  })
  scheduleItemId!: string;

  @Column('uniqueidentifier', { name: 'ScheduleID' })
  scheduleId!: string;

  @Column('int', { name: 'ScheduleItemIndex', default: () => '(0)' })
  scheduleItemIndex!: number;

  @Column('tinyint', { name: 'WorkCenter' })
  workCenter!: number;

  @Column('tinyint', { name: 'Shift' })
  shift!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'StartTime' })
  startTime!: number;

  @Column('int', { name: 'EndTime' })
  endTime!: number;

  @Column('nvarchar', { name: 'ShiftDescription', nullable: true, length: 20 })
  shiftDescription!: string | null;

  @ManyToOne(() => Schedule, (schedule) => schedule.scheduleItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScheduleID', referencedColumnName: 'scheduleId' }])
  schedule!: Schedule;
}
