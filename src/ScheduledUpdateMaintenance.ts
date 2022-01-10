import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ScheduledUpdateScheduleGroupUpdate } from './ScheduledUpdateScheduleGroupUpdate';

@Index('PK_ScheduledUpdateMaintenance', ['scheduledUpdateMaintenanceId'], {
  unique: true,
})
@Entity('ScheduledUpdateMaintenance', { schema: 'dbo' })
export class ScheduledUpdateMaintenance {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduledUpdateMaintenanceID',
    default: () => 'newsequentialid()',
  })
  scheduledUpdateMaintenanceId!: string;

  @Column('nvarchar', { name: 'Maintenance', length: 40, default: () => "''" })
  maintenance!: string;

  @Column('nvarchar', {
    name: 'PrimaryTable',
    length: 255,
    default: () => "''",
  })
  primaryTable!: string;

  @Column('uniqueidentifier', { name: 'MenuPageItemID', nullable: true })
  menuPageItemId!: string | null;

  @OneToMany(
    () => ScheduledUpdateScheduleGroupUpdate,
    (scheduledUpdateScheduleGroupUpdate) =>
      scheduledUpdateScheduleGroupUpdate.scheduledUpdateMaintenance
  )
  scheduledUpdateScheduleGroupUpdates!: ScheduledUpdateScheduleGroupUpdate[];
}
