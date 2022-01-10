import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleTax', ['saleId'], {})
@Index('PK_SaleTax', ['saleTaxId'], { unique: true })
@Entity('SaleTax', { schema: 'dbo' })
export class SaleTax {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleTaxID',
    default: () => 'newsequentialid()',
  })
  saleTaxId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'TaxIndex' })
  taxIndex!: number;

  @Column('int', { name: 'WorkTax' })
  workTax!: number;

  @Column('int', { name: 'OrigionalTax' })
  origionalTax!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleTaxes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
