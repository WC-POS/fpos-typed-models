import { Column, Entity, Index } from 'typeorm';

@Index('PK_BucketTransfer', ['bucketTransferId'], { unique: true })
@Entity('BucketTransfer', { schema: 'dbo' })
export class BucketTransfer {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BucketTransferID',
    default: () => 'newid()',
  })
  bucketTransferId!: string;

  @Column('datetime', { name: 'CreateDate', default: () => 'getdate()' })
  createDate!: Date;

  @Column('nvarchar', { name: 'BucketType', length: 50 })
  bucketType!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'Key1', nullable: true, length: 50 })
  key1!: string | null;

  @Column('nvarchar', { name: 'Key2', nullable: true, length: 50 })
  key2!: string | null;

  @Column('nvarchar', { name: 'Key3', nullable: true, length: 50 })
  key3!: string | null;

  @Column('nvarchar', { name: 'Key4', nullable: true, length: 50 })
  key4!: string | null;

  @Column('nvarchar', { name: 'Key5', nullable: true, length: 50 })
  key5!: string | null;

  @Column('nvarchar', { name: 'Key6', nullable: true, length: 50 })
  key6!: string | null;
}
