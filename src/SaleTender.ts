import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleTender', ['saleId'], {})
@Index('PK_SaleTender', ['saleTenderId'], { unique: true })
@Entity('SaleTender', { schema: 'dbo' })
export class SaleTender {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleTenderID',
    default: () => 'newsequentialid()',
  })
  saleTenderId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'TenderIndex' })
  tenderIndex!: number;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'ForeignIndex' })
  foreignIndex!: number;

  @Column('int', { name: 'ForeignAmount' })
  foreignAmount!: number;

  @Column('int', { name: 'Customer' })
  customer!: number;

  @Column('int', { name: 'EmployeeTip', default: () => '(0)' })
  employeeTip!: number;

  @Column('int', { name: 'HouseTip', default: () => '(0)' })
  houseTip!: number;

  @Column('bit', { name: 'UseTipCalc', default: () => '(0)' })
  useTipCalc!: boolean;

  @Column('uniqueidentifier', { name: 'SignatureID', nullable: true })
  signatureId!: string | null;

  @Column('nvarchar', {
    name: 'MediaMemo',
    nullable: true,
    length: 32,
    default: () => "''",
  })
  mediaMemo!: string | null;

  @ManyToOne(() => Sale, (sale) => sale.saleTenders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
