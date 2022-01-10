import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_indexDefragLog_v40', ['indexDefragId'], { unique: true })
@Entity('dba_indexDefragLog', { schema: 'dbo' })
export class DbaIndexDefragLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'indexDefrag_id' })
  indexDefragId!: number;

  @Column('int', { name: 'databaseID' })
  databaseId!: number;

  @Column('nvarchar', { name: 'databaseName', length: 128 })
  databaseName!: string;

  @Column('int', { name: 'objectID' })
  objectId!: number;

  @Column('nvarchar', { name: 'objectName', length: 128 })
  objectName!: string;

  @Column('int', { name: 'indexID' })
  indexId!: number;

  @Column('nvarchar', { name: 'indexName', length: 128 })
  indexName!: string;

  @Column('smallint', { name: 'partitionNumber' })
  partitionNumber!: number;

  @Column('float', { name: 'fragmentation', precision: 53 })
  fragmentation!: number;

  @Column('int', { name: 'page_count' })
  pageCount!: number;

  @Column('datetime', { name: 'dateTimeStart' })
  dateTimeStart!: Date;

  @Column('datetime', { name: 'dateTimeEnd', nullable: true })
  dateTimeEnd!: Date | null;

  @Column('int', { name: 'durationSeconds', nullable: true })
  durationSeconds!: number | null;

  @Column('varchar', { name: 'sqlStatement', nullable: true, length: 4000 })
  sqlStatement!: string | null;

  @Column('varchar', { name: 'errorMessage', nullable: true, length: 1000 })
  errorMessage!: string | null;
}
