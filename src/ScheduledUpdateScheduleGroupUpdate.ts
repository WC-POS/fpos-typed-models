import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ScheduledUpdateMaintenance } from './ScheduledUpdateMaintenance';
import { ScheduledUpdateScheduleGroup } from './ScheduledUpdateScheduleGroup';
import { ScheduledUpdateScheduleGroupUpdateSettingChange } from './ScheduledUpdateScheduleGroupUpdateSettingChange';

@Index('PK_ScheduledUpdateUpdate', ['scheduledUpdateUpdateId'], {
  unique: true,
})
@Entity('ScheduledUpdateScheduleGroupUpdate', { schema: 'dbo' })
export class ScheduledUpdateScheduleGroupUpdate {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduledUpdateUpdateID',
    default: () => 'newsequentialid()',
  })
  scheduledUpdateUpdateId!: string;

  @ManyToOne(
    () => ScheduledUpdateMaintenance,
    (scheduledUpdateMaintenance) =>
      scheduledUpdateMaintenance.scheduledUpdateScheduleGroupUpdates,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    {
      name: 'ScheduledUpdateMaintenanceID',
      referencedColumnName: 'scheduledUpdateMaintenanceId',
    },
  ])
  scheduledUpdateMaintenance!: ScheduledUpdateMaintenance;

  @ManyToOne(
    () => ScheduledUpdateScheduleGroup,
    (scheduledUpdateScheduleGroup) =>
      scheduledUpdateScheduleGroup.scheduledUpdateScheduleGroupUpdates,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScheduleGroupID', referencedColumnName: 'scheduleGroupId' },
  ])
  scheduleGroup!: ScheduledUpdateScheduleGroup;

  @OneToMany(
    () => ScheduledUpdateScheduleGroupUpdateSettingChange,
    (scheduledUpdateScheduleGroupUpdateSettingChange) =>
      scheduledUpdateScheduleGroupUpdateSettingChange.scheduledUpdateUpdate
  )
  scheduledUpdateScheduleGroupUpdateSettingChanges!: ScheduledUpdateScheduleGroupUpdateSettingChange[];
}
