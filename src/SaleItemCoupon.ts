import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { SaleItem } from './SaleItem';

@Index('IX_SaleItemCoupon', ['saleItemId'], {})
@Index('PK_EJLineItemCoupon', ['saleItemCouponId'], { unique: true })
@Entity('SaleItemCoupon', { schema: 'dbo' })
export class SaleItemCoupon {
  @Column('uniqueidentifier', { primary: true, name: 'SaleItemCouponID' })
  saleItemCouponId!: string;

  @Column('uniqueidentifier', { name: 'SaleItemID' })
  saleItemId!: string;

  @Column('int', { name: 'ItemIndex' })
  itemIndex!: number;

  @Column('int', { name: 'CouponIndex' })
  couponIndex!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'SplitAmount', default: () => '(0)' })
  splitAmount!: number;

  @ManyToOne(() => SaleItem, (saleItem) => saleItem.saleItemCoupons, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleItemID', referencedColumnName: 'saleItemId' }])
  saleItem!: SaleItem;
}
