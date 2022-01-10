import { Column, Entity, Index, OneToMany } from 'typeorm';
import { DataGroup } from './DataGroup';
import { ScheduledUpdateScheduleGroupUpdate } from './ScheduledUpdateScheduleGroupUpdate';

@Index('PK_ScheduleGroupID', ['scheduleGroupId'], { unique: true })
@Entity('ScheduledUpdateScheduleGroup', { schema: 'dbo' })
export class ScheduledUpdateScheduleGroup {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduleGroupID',
    default: () => 'newid()',
  })
  scheduleGroupId!: string;

  @Column('nvarchar', {
    name: 'ScheduleGroupName',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  scheduleGroupName!: string | null;

  @Column('datetime', { name: 'ScheduleGroupDate', default: () => 'getdate()' })
  scheduleGroupDate!: Date;

  @Column('uniqueidentifier', {
    name: 'DataGroupID',
    nullable: true,
    default: () => 'NULL',
  })
  dataGroupId!: string | null;

  @OneToMany(() => DataGroup, (dataGroup) => dataGroup.scheduleGroup)
  dataGroups!: DataGroup[];

  @OneToMany(
    () => ScheduledUpdateScheduleGroupUpdate,
    (scheduledUpdateScheduleGroupUpdate) =>
      scheduledUpdateScheduleGroupUpdate.scheduleGroup
  )
  scheduledUpdateScheduleGroupUpdates!: ScheduledUpdateScheduleGroupUpdate[];
}
