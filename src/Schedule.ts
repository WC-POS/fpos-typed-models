import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ScheduleItem } from './ScheduleItem';

@Index('PK_Schedule', ['scheduleId'], { unique: true })
@Entity('Schedule', { schema: 'dbo' })
export class Schedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduleID',
    default: () => 'newsequentialid()',
  })
  scheduleId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'ScheduleDate' })
  scheduleDate!: Date;

  @Column('int', { name: 'ScheduleCount' })
  scheduleCount!: number;

  @OneToMany(() => ScheduleItem, (scheduleItem) => scheduleItem.schedule)
  scheduleItems!: ScheduleItem[];
}
