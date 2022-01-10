import { Column, Entity, Index } from 'typeorm';

@Index('IX_DBFile', ['fileType', 'fileName'], {})
@Index('PK_File', ['dbFileId'], { unique: true })
@Entity('DBFile', { schema: 'dbo' })
export class DbFile {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DBFileID',
    default: () => 'newsequentialid()',
  })
  dbFileId!: string;

  @Column('int', { name: 'FileType' })
  fileType!: number;

  @Column('datetime', { name: 'FileDate' })
  fileDate!: Date;

  @Column('nvarchar', { name: 'FileName', length: 50 })
  fileName!: string;

  @Column('varbinary', { name: 'Data' })
  data!: Buffer;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
