import { Column, Entity, Index, OneToMany } from 'typeorm';
import { PrintJobLine } from './PrintJobLine';

@Index('IX_PrintJob', ['toTerminalNumber', 'onHold', 'storeId'], {})
@Index('PK_PrintQueue', ['printJobId'], { unique: true })
@Entity('PrintJob', { schema: 'dbo' })
export class PrintJob {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PrintJobID',
    default: () => 'newsequentialid()',
  })
  printJobId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'ToTerminalNumber' })
  toTerminalNumber!: number;

  @Column('int', { name: 'ToPrinterNumber' })
  toPrinterNumber!: number;

  @Column('nvarchar', {
    name: 'RerouteDescription',
    nullable: true,
    length: 33,
  })
  rerouteDescription!: string | null;

  @Column('bit', { name: 'IsBumped' })
  isBumped!: boolean;

  @Column('bit', { name: 'IsReprint' })
  isReprint!: boolean;

  @Column('datetime', { name: 'PrintDate' })
  printDate!: Date;

  @Column('datetime', { name: 'CheckStartDate', nullable: true })
  checkStartDate!: Date | null;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'FromTerminalNumber' })
  fromTerminalNumber!: number;

  @Column('int', { name: 'MaxLines' })
  maxLines!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('nvarchar', { name: 'EmployeeName', nullable: true, length: 64 })
  employeeName!: string | null;

  @Column('int', { name: 'SuspendNumber' })
  suspendNumber!: number;

  @Column('int', { name: 'CourseNumber' })
  courseNumber!: number;

  @Column('nvarchar', { name: 'TableDescription', nullable: true, length: 32 })
  tableDescription!: string | null;

  @Column('nvarchar', { name: 'CheckDescription', nullable: true, length: 15 })
  checkDescription!: string | null;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('int', { name: 'OrderType' })
  orderType!: number;

  @Column('bit', { name: 'WasBumped' })
  wasBumped!: boolean;

  @Column('int', { name: 'CheckTotal' })
  checkTotal!: number;

  @Column('bit', { name: 'OnHold' })
  onHold!: boolean;

  @Column('uniqueidentifier', { name: 'SaleID', nullable: true })
  saleId!: string | null;

  @Column('smallint', { name: 'SuspendNumberTerminal', nullable: true })
  suspendNumberTerminal!: number | null;

  @OneToMany(() => PrintJobLine, (printJobLine) => printJobLine.printJob)
  printJobLines!: PrintJobLine[];
}
