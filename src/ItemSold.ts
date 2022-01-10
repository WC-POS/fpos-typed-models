import { Column, Entity, Index } from 'typeorm';

@Index('PK_ItemSold', ['itemSoldId'], { unique: true })
@Entity('ItemSold', { schema: 'dbo' })
export class ItemSold {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemSoldID',
    default: () => 'newsequentialid()',
  })
  itemSoldId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'SoldDate' })
  soldDate!: Date;

  @Column('int', { name: 'Quantity' })
  quantity!: number;

  @Column('nvarchar', { name: 'ItemName', length: 33 })
  itemName!: string;

  @Column('nvarchar', { name: 'ItemDescription', length: 31 })
  itemDescription!: string;

  @Column('nvarchar', { name: 'Department', length: 11 })
  department!: string;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'TableNumber' })
  tableNumber!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'SupervisorID' })
  supervisorId!: number;

  @Column('bit', { name: 'IsModifier' })
  isModifier!: boolean;

  @Column('int', { name: 'Price' })
  price!: number;
}
