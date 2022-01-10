import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MobileTerminal } from './MobileTerminal';

@Index('IX_MobileTerminalSessionInfo_SessionID', ['sessionId'], {
  unique: true,
})
@Index('PK_MobileTerminalSessionInfo', ['mobileTerminalSessionInfoId'], {
  unique: true,
})
@Entity('MobileTerminalSessionInfo', { schema: 'dbo' })
export class MobileTerminalSessionInfo {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MobileTerminalSessionInfoID',
    default: () => 'newsequentialid()',
  })
  mobileTerminalSessionInfoId!: string;

  @Column('binary', { name: 'SessionID', length: 21 })
  sessionId!: Buffer;

  @Column('varbinary', { name: 'BinaryData', length: 2048 })
  binaryData!: Buffer;

  @Column('varbinary', { name: 'BinaryData2', length: 2048 })
  binaryData2!: Buffer;

  @Column('datetime', { name: 'InsertDateTime', default: () => 'getdate()' })
  insertDateTime!: Date;

  @Column('int', { name: 'BinaryDataLength', default: () => '(0)' })
  binaryDataLength!: number;

  @Column('int', { name: 'BinaryData2Length', default: () => '(0)' })
  binaryData2Length!: number;

  @Column('binary', { name: 'SessionKey', length: 9 })
  sessionKey!: Buffer;

  @Column('bit', { name: 'Active' })
  active!: boolean;

  @Column('datetime', { name: 'LastUpdateDateTime', nullable: true })
  lastUpdateDateTime!: Date | null;

  @Column('bit', { name: 'IsFinalized', default: () => '(0)' })
  isFinalized!: boolean;

  @ManyToOne(
    () => MobileTerminal,
    (mobileTerminal) => mobileTerminal.mobileTerminalSessionInfos,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'MobileTerminalID', referencedColumnName: 'mobileTerminalId' },
  ])
  mobileTerminal!: MobileTerminal;
}
