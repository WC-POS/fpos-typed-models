import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Coupon } from './Coupon';

@Index('PK_CouponTranslation', ['couponTranslationId'], { unique: true })
@Entity('CouponTranslation', { schema: 'dbo' })
export class CouponTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CouponTranslationID',
    default: () => 'newsequentialid()',
  })
  couponTranslationId!: string;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Coupon, (coupon) => coupon.couponTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CouponID', referencedColumnName: 'couponId' }])
  coupon!: Coupon;
}
