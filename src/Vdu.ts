import { Column, Entity, Index, OneToMany } from 'typeorm';
import { VduItem } from './VduItem';

@Index('PK_VDU', ['vduid'], { unique: true })
@Entity('VDU', { schema: 'dbo' })
export class Vdu {
  @Column('uniqueidentifier', { primary: true, name: 'VDUID' })
  vduid!: string;

  @Column('int', { name: 'TransactionType', default: () => '(0)' })
  transactionType!: number;

  @Column('datetime', { name: 'TransactionDate' })
  transactionDate!: Date;

  @Column('int', { name: 'ToPrinterNumber', default: () => '(0)' })
  toPrinterNumber!: number;

  @Column('smallint', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;

  @Column('int', { name: 'CheckNumber', default: () => '(0)' })
  checkNumber!: number;

  @Column('int', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @Column('tinyint', { name: 'OrderType', default: () => '(0)' })
  orderType!: number;

  @Column('smallint', { name: 'TableIndex', default: () => '(0)' })
  tableIndex!: number;

  @Column('int', { name: 'Total' })
  total!: number;

  @Column('nvarchar', { name: 'CustomerName', nullable: true, length: 50 })
  customerName!: string | null;

  @Column('int', { name: 'CustomerCount', default: () => '(0)' })
  customerCount!: number;

  @Column('int', { name: 'SubTotal', default: () => '(0)' })
  subTotal!: number;

  @Column('datetime', { name: 'PromiseTime', nullable: true })
  promiseTime!: Date | null;

  @Column('tinyint', { name: 'CheckStatus', default: () => '(0)' })
  checkStatus!: number;

  @Column('smallint', { name: 'OrderTakerEmpID', default: () => '(0)' })
  orderTakerEmpId!: number;

  @Column('nvarchar', { name: 'CheckDescription', nullable: true, length: 50 })
  checkDescription!: string | null;

  @OneToMany(() => VduItem, (vduItem) => vduItem.vdu)
  vduItems!: VduItem[];
}
