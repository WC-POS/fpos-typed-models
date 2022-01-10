import { Column, Entity, Index } from 'typeorm';

@Index('IX__BucketValues_Key1', ['key1'], {})
@Index('IX__BucketValues_Key2', ['key2'], {})
@Index('IX__BucketValues_Key3', ['key3'], {})
@Index('IX__BucketValues_Key4', ['key4'], {})
@Index('IX__BucketValues_Key5', ['key5'], {})
@Index('IX__BucketValues_Key6', ['key6'], {})
@Index('PK__BucketValues', ['id'], { unique: true })
@Entity('_BucketValues', { schema: 'dbo' })
export class BucketValues {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ID',
    default: () => 'newsequentialid()',
  })
  id!: string;

  @Column('datetime', { name: 'CreatedDate', nullable: true })
  createdDate!: Date | null;

  @Column('datetime', { name: 'LastUpdated', nullable: true })
  lastUpdated!: Date | null;

  @Column('nvarchar', { name: 'Key1', nullable: true, length: 150 })
  key1!: string | null;

  @Column('nvarchar', { name: 'Key2', nullable: true, length: 150 })
  key2!: string | null;

  @Column('nvarchar', { name: 'Key3', nullable: true, length: 150 })
  key3!: string | null;

  @Column('nvarchar', { name: 'Key4', nullable: true, length: 150 })
  key4!: string | null;

  @Column('nvarchar', { name: 'Key5', nullable: true, length: 150 })
  key5!: string | null;

  @Column('nvarchar', { name: 'BucketType', length: 150 })
  bucketType!: string;

  @Column('decimal', {
    name: 'BucketValue1',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue1!: number | null;

  @Column('decimal', {
    name: 'BucketValue2',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue2!: number | null;

  @Column('decimal', {
    name: 'BucketValue3',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue3!: number | null;

  @Column('decimal', {
    name: 'BucketValue4',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue4!: number | null;

  @Column('decimal', {
    name: 'BucketValue5',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue5!: number | null;

  @Column('bit', { name: 'Dirty', nullable: true })
  dirty!: boolean | null;

  @Column('nvarchar', { name: 'Key6', nullable: true, length: 150 })
  key6!: string | null;

  @Column('int', { name: 'StoreID', default: () => '(-1)' })
  storeId!: number;

  @Column('decimal', {
    name: 'BucketValue6',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue6!: number | null;

  @Column('decimal', {
    name: 'BucketValue7',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue7!: number | null;

  @Column('decimal', {
    name: 'BucketValue8',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue8!: number | null;

  @Column('decimal', {
    name: 'BucketValue9',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue9!: number | null;

  @Column('decimal', {
    name: 'BucketValue10',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue10!: number | null;

  @Column('decimal', {
    name: 'BucketValue11',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue11!: number | null;

  @Column('decimal', {
    name: 'BucketValue12',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue12!: number | null;

  @Column('decimal', {
    name: 'BucketValue13',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue13!: number | null;

  @Column('decimal', {
    name: 'BucketValue14',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue14!: number | null;

  @Column('decimal', {
    name: 'BucketValue15',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue15!: number | null;

  @Column('decimal', {
    name: 'BucketValue16',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue16!: number | null;

  @Column('decimal', {
    name: 'BucketValue17',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue17!: number | null;

  @Column('decimal', {
    name: 'BucketValue18',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue18!: number | null;

  @Column('decimal', {
    name: 'BucketValue19',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue19!: number | null;

  @Column('decimal', {
    name: 'BucketValue20',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  bucketValue20!: number | null;
}
