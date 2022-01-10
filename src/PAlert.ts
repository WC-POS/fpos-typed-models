import { Column, Entity, Index, OneToMany } from 'typeorm';
import { PAlertSetting } from './PAlertSetting';
import { PAlertTo } from './PAlertTo';

@Index('PK_PAlert', ['alertId'], { unique: true })
@Entity('PAlert', { schema: 'dbo' })
export class PAlert {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'AlertID',
    default: () => 'newsequentialid()',
  })
  alertId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'AlertName', length: 100 })
  alertName!: string;

  @Column('nvarchar', { name: 'AlertType', length: 50 })
  alertType!: string;

  @Column('nvarchar', { name: 'AdditionalEmail', nullable: true })
  additionalEmail!: string | null;

  @Column('datetime', { name: 'LastRun', nullable: true })
  lastRun!: Date | null;

  @Column('bit', { name: 'IsEnabled', default: () => '(0)' })
  isEnabled!: boolean;

  @Column('nvarchar', { name: 'ScheduleData' })
  scheduleData!: string;

  @Column('bit', { name: 'ClockedInOnly', default: () => '(0)' })
  clockedInOnly!: boolean;

  @Column('int', { name: 'FormatType', default: () => '(0)' })
  formatType!: number;

  @Column('bit', { name: 'RunImmediately', default: () => '(0)' })
  runImmediately!: boolean;

  @OneToMany(() => PAlertSetting, (pAlertSetting) => pAlertSetting.alert)
  pAlertSettings!: PAlertSetting[];

  @OneToMany(() => PAlertTo, (pAlertTo) => pAlertTo.alert)
  pAlertTos!: PAlertTo[];
}
