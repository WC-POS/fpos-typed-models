import { Column, Entity, Index } from 'typeorm';

@Index('PK_Cashier', ['cashierId'], { unique: true })
@Entity('Cashier', { schema: 'dbo' })
export class Cashier {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CashierID',
    default: () => 'newsequentialid()',
  })
  cashierId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'CashierIndex' })
  cashierIndex!: number;

  @Column('nvarchar', { name: 'Cashier', length: 32 })
  cashier!: string;
}
