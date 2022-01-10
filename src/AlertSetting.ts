import { Column, Entity, Index } from 'typeorm';

@Index('IX_AlertSetting', ['alertId'], {})
@Index('PK_AlertSettings', ['alertSettingsId'], { unique: true })
@Entity('AlertSetting', { schema: 'dbo' })
export class AlertSetting {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'AlertSettingsID',
    default: () => 'newsequentialid()',
  })
  alertSettingsId!: string;

  @Column('nvarchar', {
    name: 'AlertFieldName',
    length: 500,
    default: () => "''",
  })
  alertFieldName!: string;

  @Column('nvarchar', { name: 'AlertFieldValue', default: () => "''" })
  alertFieldValue!: string;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('datetime', { name: 'CreateStamp' })
  createStamp!: Date;

  @Column('datetime', { name: 'UpdateStamp' })
  updateStamp!: Date;

  @Column('uniqueidentifier', { name: 'AlertID' })
  alertId!: string;
}
