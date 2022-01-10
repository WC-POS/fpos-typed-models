import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleCoupon', ['saleId'], {})
@Index('PK_SaleCoupon', ['saleCouponId'], { unique: true })
@Entity('SaleCoupon', { schema: 'dbo' })
export class SaleCoupon {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleCouponID',
    default: () => 'newsequentialid()',
  })
  saleCouponId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'CouponIndex' })
  couponIndex!: number;

  @Column('int', { name: 'Dollar' })
  dollar!: number;

  @Column('int', { name: 'AppliedCount' })
  appliedCount!: number;

  @Column('int', { name: 'ActualAppliedCount', default: () => '(0)' })
  actualAppliedCount!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleCoupons, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
