import { Column, Entity, Index } from 'typeorm';

@Index('PK_EnterpriseSyncExclude', ['enterpriseSyncExcludeId'], {
  unique: true,
})
@Entity('EnterpriseSyncExclude', { schema: 'dbo' })
export class EnterpriseSyncExclude {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EnterpriseSyncExcludeID',
    default: () => 'newsequentialid()',
  })
  enterpriseSyncExcludeId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'TableID', default: () => '(-10)' })
  tableId!: number;

  @Column('int', { name: 'Destination', default: () => '(-1)' })
  destination!: number;
}
