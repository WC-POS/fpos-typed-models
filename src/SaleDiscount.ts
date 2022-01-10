import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleDiscount', ['saleId'], {})
@Index('PK_SaleDiscount', ['saleDiscountId'], { unique: true })
@Entity('SaleDiscount', { schema: 'dbo' })
export class SaleDiscount {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleDiscountID',
    default: () => 'newsequentialid()',
  })
  saleDiscountId!: string;

  @Column('uniqueidentifier', { name: 'SaleID', nullable: true })
  saleId!: string | null;

  @Column('int', { name: 'DiscountIndex' })
  discountIndex!: number;

  @Column('int', { name: 'Dollar' })
  dollar!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'ReasonIndex' })
  reasonIndex!: number;

  @Column('int', { name: 'MaxAmount' })
  maxAmount!: number;

  @Column('nvarchar', { name: 'ReasonDescription', nullable: true, length: 32 })
  reasonDescription!: string | null;

  @ManyToOne(() => Sale, (sale) => sale.saleDiscounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
