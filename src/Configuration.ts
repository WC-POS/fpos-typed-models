import { Column, Entity, Index } from 'typeorm';

@Index('PK_Configuration', ['configurationId'], { unique: true })
@Entity('Configuration', { schema: 'dbo' })
export class Configuration {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ConfigurationID',
    default: () => 'newsequentialid()',
  })
  configurationId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;

  @Column('nvarchar', { name: 'Section', length: 50 })
  section!: string;

  @Column('nvarchar', { name: 'Parameter', length: 50 })
  parameter!: string;

  @Column('int', { name: 'ParameterIndex', default: () => '(0)' })
  parameterIndex!: number;

  @Column('nvarchar', { name: 'Value' })
  value!: string;

  @Column('int', { name: 'ParameterIndex2', default: () => '(-1)' })
  parameterIndex2!: number;

  @Column('int', { name: 'DataType', default: () => '(0)' })
  dataType!: number;

  @Column('uniqueidentifier', { name: 'DeviceID', nullable: true })
  deviceId!: string | null;
}
