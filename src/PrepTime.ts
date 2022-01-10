import { Column, Entity, Index } from 'typeorm';

@Index('PK_PrepTime', ['prepTimeId'], { unique: true })
@Entity('PrepTime', { schema: 'dbo' })
export class PrepTime {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PrepTimeID',
    default: () => 'newsequentialid()',
  })
  prepTimeId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate' })
  endDate!: Date;

  @Column('int', { name: 'Quantity' })
  quantity!: number;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;
}
