import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ScheduledUpdateScheduleGroup } from './ScheduledUpdateScheduleGroup';
import { DataGroupStore } from './DataGroupStore';

@Index('PK__DataGrou__6171A7B4092B1A0C', ['dataGroupId'], { unique: true })
@Entity('DataGroup', { schema: 'dbo' })
export class DataGroup {
  @Column('uniqueidentifier', { primary: true, name: 'DataGroupID' })
  dataGroupId!: string;

  @Column('datetime', {
    name: 'AppliedDate',
    nullable: true,
    default: () => 'NULL',
  })
  appliedDate!: Date | null;

  @ManyToOne(
    () => ScheduledUpdateScheduleGroup,
    (scheduledUpdateScheduleGroup) => scheduledUpdateScheduleGroup.dataGroups
  )
  @JoinColumn([
    { name: 'ScheduleGroupID', referencedColumnName: 'scheduleGroupId' },
  ])
  scheduleGroup!: ScheduledUpdateScheduleGroup;

  @OneToMany(() => DataGroupStore, (dataGroupStore) => dataGroupStore.dataGroup)
  dataGroupStores!: DataGroupStore[];
}
