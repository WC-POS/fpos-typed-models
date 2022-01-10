import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PrintJob } from './PrintJob';

@Index('IX_PrintJobLine', ['printJobId'], {})
@Index('PK_PrintQueueLine', ['printLineId'], { unique: true })
@Entity('PrintJobLine', { schema: 'dbo' })
export class PrintJobLine {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PrintLineID',
    default: () => 'newsequentialid()',
  })
  printLineId!: string;

  @Column('uniqueidentifier', { name: 'PrintJobID' })
  printJobId!: string;

  @Column('int', { name: 'LineIndex' })
  lineIndex!: number;

  @Column('nvarchar', { name: 'Text', nullable: true, length: 128 })
  text!: string | null;

  @Column('nvarchar', { name: 'RightText', nullable: true, length: 128 })
  rightText!: string | null;

  @Column('nvarchar', { name: 'LeftText', nullable: true, length: 128 })
  leftText!: string | null;

  @Column('int', { name: 'LineLength' })
  lineLength!: number;

  @Column('int', { name: 'PrintOptions' })
  printOptions!: number;

  @Column('nvarchar', { name: 'ItemName', nullable: true, length: 33 })
  itemName!: string | null;

  @Column('int', { name: 'Quantity' })
  quantity!: number;

  @Column('int', { name: 'Flags' })
  flags!: number;

  @Column('int', { name: 'BergPLU' })
  bergPlu!: number;

  @Column('int', { name: 'ActualPrice' })
  actualPrice!: number;

  @Column('int', { name: 'BasePrice' })
  basePrice!: number;

  @Column('tinyint', { name: 'VDUColor' })
  vduColor!: number;

  @Column('int', { name: 'ParentIndex', nullable: true })
  parentIndex!: number | null;

  @Column('int', { name: 'PEPLU', nullable: true })
  peplu!: number | null;

  @Column('uniqueidentifier', { name: 'SaleItemID', nullable: true })
  saleItemId!: string | null;

  @Column('uniqueidentifier', { name: 'SaleTenderID', nullable: true })
  saleTenderId!: string | null;

  @Column('uniqueidentifier', { name: 'SignatureID', nullable: true })
  signatureId!: string | null;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', {
    name: 'SeparatedText',
    nullable: true,
    length: 128,
    default: () => "''",
  })
  separatedText!: string | null;

  @ManyToOne(() => PrintJob, (printJob) => printJob.printJobLines, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'PrintJobID', referencedColumnName: 'printJobId' }])
  printJob!: PrintJob;
}
