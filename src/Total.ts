import { Column, Entity, Index } from 'typeorm';

@Index('IX_Total', ['totalDate'], {})
@Index('PK_Total', ['totalId'], { unique: true })
@Entity('Total', { schema: 'dbo' })
export class Total {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TotalID',
    default: () => 'newsequentialid()',
  })
  totalId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'TotalDate' })
  totalDate!: Date;

  @Column('int', { name: 'TotalType' })
  totalType!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'DrawerNumber' })
  drawerNumber!: number;

  @Column('int', { name: 'TableNumber' })
  tableNumber!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 32 })
  description!: string | null;

  @Column('int', { name: 'Section' })
  section!: number;

  @Column('int', { name: 'RevenueCenter' })
  revenueCenter!: number;

  @Column('int', { name: 'TipEmpID', default: () => '(0)' })
  tipEmpId!: number;
}
