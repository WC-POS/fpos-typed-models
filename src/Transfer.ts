import { Column, Entity, Index } from 'typeorm';

@Index('IX_Transfer', ['toTerminalNumber', 'processOnServer', 'retryCount'], {})
@Index('PK_Update', ['transferId'], { unique: true })
@Entity('Transfer', { schema: 'dbo' })
export class Transfer {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TransferID',
    default: () => 'newid()',
  })
  transferId!: string;

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
