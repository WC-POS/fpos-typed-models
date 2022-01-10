import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleShare', ['saleId'], {})
@Index('PK_EJSaleHeaderShare', ['saleShareId'], { unique: true })
@Entity('SaleShare', { schema: 'dbo' })
export class SaleShare {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleShareID',
    default: () => 'newsequentialid()',
  })
  saleShareId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'ShareIndex' })
  shareIndex!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'SalePercent' })
  salePercent!: number;

  @Column('int', { name: 'TipPercent' })
  tipPercent!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleShares, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
