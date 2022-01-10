import { Column, Entity, Index } from 'typeorm';

@Index('PK_StatusMessage', ['statusMessageId'], { unique: true })
@Entity('StatusMessage', { schema: 'dbo' })
export class StatusMessage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'StatusMessageID',
    default: () => 'newsequentialid()',
  })
  statusMessageId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'TerminalID', default: () => '(0)' })
  terminalId!: number;

  @Column('tinyint', { name: 'StatusType', default: () => '(0)' })
  statusType!: number;

  @Column('tinyint', { name: 'SubStatusType', default: () => '(0)' })
  subStatusType!: number;

  @Column('int', { name: 'DeviceID', default: () => '(0)' })
  deviceId!: number;

  @Column('nvarchar', { name: 'DeviceName', length: 50 })
  deviceName!: string;

  @Column('nvarchar', { name: 'Message', length: 512 })
  message!: string;

  @Column('datetime', { name: 'LastUpdated' })
  lastUpdated!: Date;
}
