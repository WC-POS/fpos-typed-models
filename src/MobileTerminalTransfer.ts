import { Column, Entity, Index } from 'typeorm';

@Index('PK_MobileUpdate', ['mobileTerminalTransferId'], { unique: true })
@Entity('MobileTerminalTransfer', { schema: 'dbo' })
export class MobileTerminalTransfer {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MobileTerminalTransferID',
    default: () => 'newid()',
  })
  mobileTerminalTransferId!: string;

  @Column('datetime', { name: 'CreateDate' })
  createDate!: Date;

  @Column('int', { name: 'TransferType' })
  transferType!: number;

  @Column('int', { name: 'Destination' })
  destination!: number;

  @Column('int', { name: 'ToStoreID' })
  toStoreId!: number;

  @Column('int', { name: 'FromStoreID', default: () => '(0)' })
  fromStoreId!: number;

  @Column('int', { name: 'ToTerminalNumber' })
  toTerminalNumber!: number;

  @Column('int', { name: 'FromTerminalNumber', default: () => '(0)' })
  fromTerminalNumber!: number;

  @Column('ntext', { name: 'Data', nullable: true })
  data!: string | null;

  @Column('int', { name: 'DBTableNumber', default: () => '(0)' })
  dbTableNumber!: number;

  @Column('uniqueidentifier', { name: 'DBRecordID' })
  dbRecordId!: string;

  @Column('bit', { name: 'ProcessOnServer', default: () => '(0)' })
  processOnServer!: boolean;

  @Column('int', { name: 'RetryCount', default: () => '(0)' })
  retryCount!: number;
}
