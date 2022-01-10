import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Activity } from './Activity';

@Index('PK_ActivityDetail', ['activityDetailId'], { unique: true })
@Entity('ActivityDetail', { schema: 'dbo' })
export class ActivityDetail {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ActivityDetailID',
    default: () => 'newsequentialid()',
  })
  activityDetailId!: string;

  @Column('nvarchar', { name: 'TableName', length: 250, default: () => "''" })
  tableName!: string;

  @Column('nvarchar', {
    name: 'PropertyName',
    length: 250,
    default: () => "''",
  })
  propertyName!: string;

  @Column('nvarchar', {
    name: 'OriginalValue',
    length: 2048,
    default: () => "''",
  })
  originalValue!: string;

  @Column('nvarchar', {
    name: 'ChangedValue',
    length: 2048,
    default: () => "''",
  })
  changedValue!: string;

  @Column('nvarchar', {
    name: 'OriginalIdentifier',
    length: 36,
    default: () => "''",
  })
  originalIdentifier!: string;

  @ManyToOne(() => Activity, (activity) => activity.activityDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ActivityID', referencedColumnName: 'activityId' }])
  activity!: Activity;
}
