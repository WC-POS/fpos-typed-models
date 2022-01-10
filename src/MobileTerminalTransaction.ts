import { Column, Entity, Index } from 'typeorm';

@Index('PK_MobileTerminalTransaction', ['mobileTerminalTransactionId'], {
  unique: true,
})
@Entity('MobileTerminalTransaction', { schema: 'dbo' })
export class MobileTerminalTransaction {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MobileTerminalTransactionID',
  })
  mobileTerminalTransactionId!: string;

  @Column('uniqueidentifier', { name: 'TransactionID' })
  transactionId!: string;

  @Column('binary', { name: 'SessionID', length: 21 })
  sessionId!: Buffer;

  @Column('tinyint', { name: 'State' })
  state!: number;

  @Column('varbinary', { name: 'Response', length: 2048 })
  response!: Buffer;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;
}
