import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Coupon } from './Coupon';

@Index('IX_CouponItem', ['couponId'], {})
@Index('PK_CouponItem', ['couponItemId'], { unique: true })
@Entity('CouponItem', { schema: 'dbo' })
export class CouponItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CouponItemID',
    default: () => 'newsequentialid()',
  })
  couponItemId!: string;

  @Column('uniqueidentifier', { name: 'CouponID' })
  couponId!: string;

  @Column('int', { name: 'CouponItemIndex' })
  couponItemIndex!: number;

  @Column('nvarchar', { name: 'ItemName', nullable: true, length: 32 })
  itemName!: string | null;

  @Column('bit', { name: 'IsRequired' })
  isRequired!: boolean;

  @Column('int', { name: 'Price' })
  price!: number;

  @ManyToOne(() => Coupon, (coupon) => coupon.couponItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CouponID', referencedColumnName: 'couponId' }])
  coupon!: Coupon;
}
