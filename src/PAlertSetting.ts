import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PAlert } from './PAlert';

@Index('PK_PAlertSetting', ['alertSettingId'], { unique: true })
@Entity('PAlertSetting', { schema: 'dbo' })
export class PAlertSetting {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'AlertSettingID',
    default: () => 'newsequentialid()',
  })
  alertSettingId!: string;

  @Column('nvarchar', { name: 'Setting', length: 50 })
  setting!: string;

  @Column('nvarchar', { name: 'Value' })
  value!: string;

  @ManyToOne(() => PAlert, (pAlert) => pAlert.pAlertSettings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'AlertID', referencedColumnName: 'alertId' }])
  alert!: PAlert;
}
