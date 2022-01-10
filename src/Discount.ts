import { Column, Entity, Index, OneToMany } from 'typeorm';
import { DiscountTranslation } from './DiscountTranslation';

@Index('PK_Discount', ['discountId'], { unique: true })
@Entity('Discount', { schema: 'dbo' })
export class Discount {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DiscountID',
    default: () => 'newsequentialid()',
  })
  discountId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'DiscountIndex' })
  discountIndex!: number;

  @Column('nvarchar', { name: 'DiscountName', length: 20 })
  discountName!: string;

  @Column('smallint', { name: 'DiscountType' })
  discountType!: number;

  @Column('int', { name: 'PercentOff' })
  percentOff!: number;

  @Column('int', { name: 'DollarsOff' })
  dollarsOff!: number;

  @Column('int', { name: 'MaxAmount' })
  maxAmount!: number;

  @Column('bit', { name: 'EnterAmount' })
  enterAmount!: boolean;

  @Column('bit', { name: 'SubFrTax' })
  subFrTax!: boolean;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate!: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('smallint', { name: 'Days' })
  days!: number;

  @Column('smallint', { name: 'Reason' })
  reason!: number;

  @Column('smallint', { name: 'SecurityLevel' })
  securityLevel!: number;

  @Column('nvarchar', { name: 'Text', nullable: true, length: 512 })
  text!: string | null;

  @Column('int', { name: 'DollarsOffSale' })
  dollarsOffSale!: number;

  @Column('bit', { name: 'IsExclusive', default: () => '(0)' })
  isExclusive!: boolean;

  @Column('bit', { name: 'DisplayInOwnSection', default: () => '(0)' })
  displayInOwnSection!: boolean;

  @OneToMany(
    () => DiscountTranslation,
    (discountTranslation) => discountTranslation.discount
  )
  discountTranslations!: DiscountTranslation[];
}
