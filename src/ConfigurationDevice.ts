import { Column, Entity, Index } from 'typeorm';

@Index('PK_ConfigurationDevice', ['configurationDeviceId'], { unique: true })
@Entity('ConfigurationDevice', { schema: 'dbo' })
export class ConfigurationDevice {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ConfigurationDeviceID',
    default: () => 'newsequentialid()',
  })
  configurationDeviceId!: string;

  @Column('int', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('nvarchar', { name: 'Name', length: 50 })
  name!: string;

  @Column('int', { name: 'Number', default: () => '(0)' })
  number!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'SettingsType', default: () => '(0)' })
  settingsType!: number;

  @Column('int', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;
}
