import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ScheduledUpdateScheduleGroupUpdateSettingChange } from './ScheduledUpdateScheduleGroupUpdateSettingChange';

@Index('PK_DataType', ['dataTypeId'], { unique: true })
@Entity('DataTypeReference', { schema: 'dbo' })
export class DataTypeReference {
  @Column('int', { primary: true, name: 'DataTypeID' })
  dataTypeId!: number;

  @Column('nvarchar', {
    name: 'DataType',
    length: 40,
    default: () => "N'String'",
  })
  dataType!: string;

  @Column('nvarchar', {
    name: 'SqlDataType',
    length: 40,
    default: () => "N'nvarchar'",
  })
  sqlDataType!: string;

  @OneToMany(
    () => ScheduledUpdateScheduleGroupUpdateSettingChange,
    (scheduledUpdateScheduleGroupUpdateSettingChange) =>
      scheduledUpdateScheduleGroupUpdateSettingChange.dataType
  )
  scheduledUpdateScheduleGroupUpdateSettingChanges!: ScheduledUpdateScheduleGroupUpdateSettingChange[];
}
