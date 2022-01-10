import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sync } from './Sync';

@Index('IX_SyncData', ['syncId'], {})
@Index('PK_SyncData', ['syncDataId'], { unique: true })
@Entity('SyncData', { schema: 'dbo' })
export class SyncData {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SyncDataID',
    default: () => 'newsequentialid()',
  })
  syncDataId!: string;

  @Column('uniqueidentifier', { name: 'SyncID' })
  syncId!: string;

  @Column('uniqueidentifier', { name: 'DBRecordID' })
  dbRecordId!: string;

  @ManyToOne(() => Sync, (sync) => sync.syncData, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SyncID', referencedColumnName: 'syncId' }])
  sync!: Sync;
}
