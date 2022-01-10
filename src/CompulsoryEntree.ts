import { Column, Entity, Index } from 'typeorm';

@Index('PK_CompulsoryEntree', ['compulsoryEntreeId'], { unique: true })
@Entity('CompulsoryEntree', { schema: 'dbo' })
export class CompulsoryEntree {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CompulsoryEntreeID',
    default: () => 'newsequentialid()',
  })
  compulsoryEntreeId!: string;

  @Column('nvarchar', {
    name: 'CompulsoryEntreeDepartment',
    length: 10,
    default: () => "''",
  })
  compulsoryEntreeDepartment!: string;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
