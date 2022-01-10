import { Column, Entity, Index } from 'typeorm';

@Index('IX_AdDisplaySchedule', ['displayId'], {})
@Index('PK_AdDisplaySchedule', ['displayScheduleId'], { unique: true })
@Entity('AdDisplaySchedule', { schema: 'dbo' })
export class AdDisplaySchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DisplayScheduleID',
    default: () => 'newsequentialid()',
  })
  displayScheduleId!: string;

  @Column('uniqueidentifier', { name: 'DisplayID' })
  displayId!: string;

  @Column('uniqueidentifier', { name: 'ObjectID' })
  objectId!: string;

  @Column('nvarchar', { name: 'DaysOfWeek', length: 50 })
  daysOfWeek!: string;

  @Column('datetime', { name: 'StartTime', nullable: true })
  startTime!: Date | null;

  @Column('datetime', { name: 'EndTime', nullable: true })
  endTime!: Date | null;

  @Column('bit', { name: 'IsEnabled' })
  isEnabled!: boolean;

  @Column('int', { name: 'Priority', default: () => '(0)' })
  priority!: number;

  @Column('int', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('uniqueidentifier', {
    name: 'GroupID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  groupId!: string;
}
