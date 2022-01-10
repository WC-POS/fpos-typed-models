import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Layout } from './Layout';

@Index('IX_LayoutSection', ['layoutId'], {})
@Index('PK_TableSection', ['layoutSectionId'], { unique: true })
@Entity('LayoutSection', { schema: 'dbo' })
export class LayoutSection {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutSectionID',
    default: () => 'newsequentialid()',
  })
  layoutSectionId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'SectionIndex' })
  sectionIndex!: number;

  @Column('nvarchar', { name: 'SectionName', length: 20 })
  sectionName!: string;

  @Column('smallint', { name: 'ScreenIndex' })
  screenIndex!: number;

  @Column('smallint', { name: 'SectionType' })
  sectionType!: number;

  @Column('bit', { name: 'TrackBySeat' })
  trackBySeat!: boolean;

  @Column('bit', { name: 'NewSaleSeat' })
  newSaleSeat!: boolean;

  @Column('bit', { name: 'NewSaleToGo' })
  newSaleToGo!: boolean;

  @Column('bit', { name: 'ForceTableNumber' })
  forceTableNumber!: boolean;

  @Column('bit', { name: 'ForceCustomerCount' })
  forceCustomerCount!: boolean;

  @Column('bit', { name: 'AutoAddSeats' })
  autoAddSeats!: boolean;

  @Column('bit', { name: 'ZeroCustomerCount' })
  zeroCustomerCount!: boolean;

  @Column('bit', { name: 'ForceOrderEmpID' })
  forceOrderEmpId!: boolean;

  @Column('smallint', { name: 'MinimumGratuityCustomerCount' })
  minimumGratuityCustomerCount!: number;

  @Column('int', { name: 'GratuityAmount' })
  gratuityAmount!: number;

  @Column('int', { name: 'SuggestedTip1' })
  suggestedTip1!: number;

  @Column('int', { name: 'SuggestedTip2' })
  suggestedTip2!: number;

  @Column('int', { name: 'SuggestedTip3' })
  suggestedTip3!: number;

  @Column('nvarchar', { name: 'HomeMenuName', nullable: true, length: 20 })
  homeMenuName!: string | null;

  @Column('smallint', { name: 'RedAfterMinutes' })
  redAfterMinutes!: number;

  @Column('smallint', { name: 'BlinkAfterMinuts' })
  blinkAfterMinuts!: number;

  @Column('bit', { name: 'ForceOrderType' })
  forceOrderType!: boolean;

  @Column('bit', { name: 'ForceCheckDescription' })
  forceCheckDescription!: boolean;

  @Column('smallint', { name: 'ForceCheckSelectionType' })
  forceCheckSelectionType!: number;

  @Column('nvarchar', { name: 'SkipModsMask', nullable: true, length: 32 })
  skipModsMask!: string | null;

  @Column('smallint', { name: 'DefaultOrderType' })
  defaultOrderType!: number;

  @Column('bit', { name: 'ForceDrinks' })
  forceDrinks!: boolean;

  @Column('bit', { name: 'AutoSendOrder' })
  autoSendOrder!: boolean;

  @Column('smallint', { name: 'CheckInfo1' })
  checkInfo1!: number;

  @Column('smallint', { name: 'CheckInfo2' })
  checkInfo2!: number;

  @Column('smallint', { name: 'CheckInfo3' })
  checkInfo3!: number;

  @Column('smallint', { name: 'CheckInfo4' })
  checkInfo4!: number;

  @Column('smallint', { name: 'PriceLevel' })
  priceLevel!: number;

  @Column('bit', { name: 'CalcGratuityWDiscounts', default: () => '(0)' })
  calcGratuityWDiscounts!: boolean;

  @Column('nvarchar', {
    name: 'CommonMenuName',
    length: 20,
    default: () => "N''",
  })
  commonMenuName!: string;

  @Column('bit', { name: 'ForceDrinksToGo', default: () => '(0)' })
  forceDrinksToGo!: boolean;

  @Column('bit', {
    name: 'AutoIncrementCourseOnSendOrder',
    default: () => '(0)',
  })
  autoIncrementCourseOnSendOrder!: boolean;

  @Column('smallint', {
    name: 'HandheldSignedOnScreenIndex',
    default: () => '(0)',
  })
  handheldSignedOnScreenIndex!: number;

  @Column('nvarchar', {
    name: 'HandheldHomeMenuName',
    nullable: true,
    length: 20,
  })
  handheldHomeMenuName!: string | null;

  @Column('nvarchar', {
    name: 'HandheldCommonMenuName',
    nullable: true,
    length: 20,
    default: () => "N''",
  })
  handheldCommonMenuName!: string | null;

  @Column('bit', {
    name: 'PromptForCustomerBeforeTender',
    default: () => '(0)',
  })
  promptForCustomerBeforeTender!: boolean;

  @Column('varbinary', {
    name: 'CustomerRequiredFields',
    nullable: true,
    length: 512,
  })
  customerRequiredFields!: Buffer | null;

  @Column('bit', { name: 'IsServiceCharge', default: () => '(0)' })
  isServiceCharge!: boolean;

  @Column('varbinary', {
    name: 'SkipOrderPrinter',
    nullable: true,
    length: 512,
  })
  skipOrderPrinter!: Buffer | null;

  @Column('smallint', { name: 'LicenseDataType', default: () => '(0)' })
  licenseDataType!: number;

  @ManyToOne(() => Layout, (layout) => layout.layoutSections, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'LayoutID', referencedColumnName: 'layoutId' }])
  layout!: Layout;
}
