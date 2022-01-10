import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SyncData } from './SyncData';

@Index('PK_Sync', ['syncId'], { unique: true })
@Entity('Sync', { schema: 'dbo' })
export class Sync {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SyncID',
    default: () => 'newsequentialid()',
  })
  syncId!: string;

  @Column('int', { name: 'DBTableNumber' })
  dbTableNumber!: number;

  @Column('int', { name: 'Source' })
  source!: number;

  @Column('int', { name: 'Destination' })
  destination!: number;

  @Column('nchar', { name: 'Status', length: 1, default: () => "N'I'" })
  status!: string;

  @Column('int', { name: 'ToStore', default: () => '(0)' })
  toStore!: number;

  @Column('int', { name: 'FromStore', default: () => '(0)' })
  fromStore!: number;

  @Column('datetime', { name: 'CreateDate', nullable: true })
  createDate!: Date | null;

  @Column('bigint', { name: 'CurrentRecordNumber', nullable: true })
  currentRecordNumber!: string | null;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate!: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @OneToMany(() => SyncData, (syncData) => syncData.sync)
  syncData!: SyncData[];
}
