import { Column, Entity, Index } from 'typeorm';

@Index('PK_LogConfig', ['logConfigId'], { unique: true })
@Entity('LogConfig', { schema: 'dbo' })
export class LogConfig {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LogConfigID',
    default: () => 'newsequentialid()',
  })
  logConfigId!: string;

  @Column('smallint', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;

  @Column('nvarchar', { name: 'Application', length: 64, default: () => "''" })
  application!: string;

  @Column('tinyint', { name: 'LogLevel', default: () => '(1)' })
  logLevel!: number;
}
