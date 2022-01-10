import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DataTypeReference } from './DataTypeReference';
import { ScheduledUpdateScheduleGroupUpdate } from './ScheduledUpdateScheduleGroupUpdate';

@Index('PK_ScheduledUpdateSettingChange', ['scheduledUpdateSettingChangeId'], {
  unique: true,
})
@Entity('ScheduledUpdateScheduleGroupUpdateSettingChange', { schema: 'dbo' })
export class ScheduledUpdateScheduleGroupUpdateSettingChange {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScheduledUpdateSettingChangeID',
    default: () => 'newsequentialid()',
  })
  scheduledUpdateSettingChangeId!: string;

  @Column('nvarchar', { name: 'ObjectName', length: 128, default: () => "''" })
  objectName!: string;

  @Column('nvarchar', { name: 'TableName', length: 128, default: () => "''" })
  tableName!: string;

  @Column('nvarchar', { name: 'ColumnName', length: 128, default: () => "''" })
  columnName!: string;

  @Column('nvarchar', {
    name: 'OriginalFieldID',
    length: 40,
    default: () => "''",
  })
  originalFieldId!: string;

  @Column('nvarchar', { name: 'PreviousValue', default: () => "''" })
  previousValue!: string;

  @Column('nvarchar', { name: 'NewValue', default: () => "''" })
  newValue!: string;

  @Column('nvarchar', { name: 'ModifiedBy', length: 128, default: () => "''" })
  modifiedBy!: string;

  @Column('datetime', { name: 'LastModified', default: () => 'getdate()' })
  lastModified!: Date;

  @ManyToOne(
    () => DataTypeReference,
    (dataTypeReference) =>
      dataTypeReference.scheduledUpdateScheduleGroupUpdateSettingChanges,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'DataTypeID', referencedColumnName: 'dataTypeId' }])
  dataType!: DataTypeReference;

  @ManyToOne(
    () => ScheduledUpdateScheduleGroupUpdate,
    (scheduledUpdateScheduleGroupUpdate) =>
      scheduledUpdateScheduleGroupUpdate.scheduledUpdateScheduleGroupUpdateSettingChanges,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    {
      name: 'ScheduledUpdateUpdateID',
      referencedColumnName: 'scheduledUpdateUpdateId',
    },
  ])
  scheduledUpdateUpdate!: ScheduledUpdateScheduleGroupUpdate;
}
