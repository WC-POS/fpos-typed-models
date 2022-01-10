import { Column, Entity, Index } from 'typeorm';

@Index('IX_Log', ['logDate'], {})
@Index('PK_Log', ['logId'], { unique: true })
@Entity('Log', { schema: 'dbo' })
export class Log {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LogID',
    default: () => 'newsequentialid()',
  })
  logId!: string;

  @Column('datetime', { name: 'LogDate', default: () => 'getdate()' })
  logDate!: Date;

  @Column('int', { name: 'ErrorType' })
  errorType!: number;

  @Column('int', { name: 'LogLevel' })
  logLevel!: number;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('bit', { name: 'IsEncrypted' })
  isEncrypted!: boolean;

  @Column('int', { name: 'ProcessGroup' })
  processGroup!: number;

  @Column('nvarchar', { name: 'Application', length: 64 })
  application!: string;

  @Column('nvarchar', { name: 'Message', length: 4000 })
  message!: string;
}
