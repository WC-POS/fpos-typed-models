import { Column, Entity, Index } from 'typeorm';

@Index('PK_GiftBackup', ['giftBackupId'], { unique: true })
@Entity('GiftBackup', { schema: 'dbo' })
export class GiftBackup {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftBackupID',
    default: () => 'newsequentialid()',
  })
  giftBackupId!: string;

  @Column('binary', { name: 'ID', length: 48 })
  id!: Buffer;

  @Column('binary', { name: 'Data', length: 512 })
  data!: Buffer;

  @Column('int', { name: 'ProcessorType', default: () => '(0)' })
  processorType!: number;

  @Column('int', { name: 'Balance', default: () => '(0)' })
  balance!: number;

  @Column('datetime', { name: 'TimeStamp' })
  timeStamp!: Date;

  @Column('bit', { name: 'Processed', default: () => '(0)' })
  processed!: boolean;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
