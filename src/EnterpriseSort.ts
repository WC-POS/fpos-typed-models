import { Column, Entity, Index } from 'typeorm';

@Index('PK_EnterpriseSort', ['enterpriseSortId'], { unique: true })
@Entity('EnterpriseSort', { schema: 'dbo' })
export class EnterpriseSort {
  @Column('uniqueidentifier', { primary: true, name: 'EnterpriseSortID' })
  enterpriseSortId!: string;

  @Column('int', { name: 'FileType', default: () => '(0)' })
  fileType!: number;

  @Column('datetime', { name: 'UpdateDate' })
  updateDate!: Date;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'FileName', length: 256 })
  fileName!: string;
}
