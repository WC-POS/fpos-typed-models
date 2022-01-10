import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MobileTerminalSessionInfo } from './MobileTerminalSessionInfo';

@Index('PK_MobileTerminal', ['mobileTerminalId'], { unique: true })
@Entity('MobileTerminal', { schema: 'dbo' })
export class MobileTerminal {
  @Column('uniqueidentifier', { primary: true, name: 'MobileTerminalID' })
  mobileTerminalId!: string;

  @Column('nvarchar', { name: 'MobileIdentifier' })
  mobileIdentifier!: string;

  @Column('smallint', { name: 'EmpID', nullable: true })
  empId!: number | null;

  @Column('int', { name: 'DeviceStatus' })
  deviceStatus!: number;

  @Column('int', { name: 'TerminalNumber', nullable: true })
  terminalNumber!: number | null;

  @Column('nvarchar', {
    name: 'SyncFile',
    nullable: true,
    default: () => 'NULL',
  })
  syncFile!: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 150 })
  description!: string | null;

  @Column('int', { name: 'SyncID', nullable: true })
  syncId!: number | null;

  @Column('nvarchar', { name: 'LastKnownIP', length: 20, default: () => "''" })
  lastKnownIp!: string;

  @OneToMany(
    () => MobileTerminalSessionInfo,
    (mobileTerminalSessionInfo) => mobileTerminalSessionInfo.mobileTerminal
  )
  mobileTerminalSessionInfos!: MobileTerminalSessionInfo[];
}
