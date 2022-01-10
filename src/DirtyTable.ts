import { Column, Entity, Index } from 'typeorm';

@Index('IX_DirtyTable', ['storeId'], {})
@Index('PK_DirtyTable', ['dirtyTableId'], { unique: true })
@Entity('DirtyTable', { schema: 'dbo' })
export class DirtyTable {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DirtyTableID',
    default: () => 'newsequentialid()',
  })
  dirtyTableId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'TableNumber' })
  tableNumber!: number;
}
