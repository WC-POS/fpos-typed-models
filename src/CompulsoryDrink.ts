import { Column, Entity, Index } from 'typeorm';

@Index('PK_CompulsoryDrink', ['compulsoryDrinkId'], { unique: true })
@Entity('CompulsoryDrink', { schema: 'dbo' })
export class CompulsoryDrink {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CompulsoryDrinkID',
    default: () => 'newsequentialid()',
  })
  compulsoryDrinkId!: string;

  @Column('nvarchar', {
    name: 'CompulsoryDrinkDepartment',
    length: 10,
    default: () => "''",
  })
  compulsoryDrinkDepartment!: string;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
