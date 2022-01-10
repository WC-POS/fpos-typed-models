import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CouponItem } from './CouponItem';
import { CouponTranslation } from './CouponTranslation';

@Index('PK_Coupon', ['couponId'], { unique: true })
@Entity('Coupon', { schema: 'dbo' })
export class Coupon {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CouponID',
    default: () => 'newsequentialid()',
  })
  couponId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'CouponIndex' })
  couponIndex!: number;

  @Column('nvarchar', { name: 'CouponName', length: 20 })
  couponName!: string;

  @Column('smallint', { name: 'Type' })
  type!: number;

  @Column('int', { name: 'Percent' })
  percent!: number;

  @Column('smallint', { name: 'ApplyType' })
  applyType!: number;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate!: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('smallint', { name: 'Days' })
  days!: number;

  @Column('bit', { name: 'SubFrTax' })
  subFrTax!: boolean;

  @Column('smallint', { name: 'MaxTimesUsed', nullable: true })
  maxTimesUsed!: number | null;

  @Column('nvarchar', { name: 'UPC', nullable: true, length: 32 })
  upc!: string | null;

  @Column('nvarchar', { name: 'Text', nullable: true, length: 512 })
  text!: string | null;

  @Column('bit', { name: 'AutoApply', default: () => '(0)' })
  autoApply!: boolean;

  @Column('bit', { name: 'IsExclusive', default: () => '(0)' })
  isExclusive!: boolean;

  @Column('bit', { name: 'ApplyToZeroPrice', default: () => '(0)' })
  applyToZeroPrice!: boolean;

  @Column('bit', { name: 'IsWebCoupon', default: () => '(0)' })
  isWebCoupon!: boolean;

  @Column('nvarchar', { name: 'WebRedemptionCode', nullable: true, length: 16 })
  webRedemptionCode!: string | null;

  @OneToMany(() => CouponItem, (couponItem) => couponItem.coupon)
  couponItems!: CouponItem[];

  @OneToMany(
    () => CouponTranslation,
    (couponTranslation) => couponTranslation.coupon
  )
  couponTranslations!: CouponTranslation[];
}
