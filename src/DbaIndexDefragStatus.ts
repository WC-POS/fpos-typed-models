import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_indexDefragStatus_v40',
  ['databaseId', 'objectId', 'indexId', 'partitionNumber'],
  { unique: true }
)
@Entity('dba_indexDefragStatus', { schema: 'dbo' })
export class DbaIndexDefragStatus {
  @Column('int', { primary: true, name: 'databaseID' })
  databaseId!: number;

  @Column('nvarchar', { name: 'databaseName', length: 128 })
  databaseName!: string;

  @Column('int', { primary: true, name: 'objectID' })
  objectId!: number;

  @Column('int', { primary: true, name: 'indexID' })
  indexId!: number;

  @Column('smallint', { primary: true, name: 'partitionNumber' })
  partitionNumber!: number;

  @Column('float', { name: 'fragmentation', precision: 53 })
  fragmentation!: number;

  @Column('int', { name: 'page_count' })
  pageCount!: number;

  @Column('bigint', { name: 'range_scan_count' })
  rangeScanCount!: string;

  @Column('nvarchar', { name: 'schemaName', nullable: true, length: 128 })
  schemaName!: string | null;

  @Column('nvarchar', { name: 'objectName', nullable: true, length: 128 })
  objectName!: string | null;

  @Column('nvarchar', { name: 'indexName', nullable: true, length: 128 })
  indexName!: string | null;

  @Column('datetime', { name: 'scanDate' })
  scanDate!: Date;

  @Column('datetime', { name: 'defragDate', nullable: true })
  defragDate!: Date | null;

  @Column('bit', { name: 'printStatus', default: () => '(0)' })
  printStatus!: boolean;

  @Column('int', { name: 'exclusionMask', default: () => '(0)' })
  exclusionMask!: number;
}
