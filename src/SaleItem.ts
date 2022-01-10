import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Sale } from './Sale';
import { SaleItemCoupon } from './SaleItemCoupon';
import { SaleItemDiscount } from './SaleItemDiscount';

@Index('IX_SaleItem', ['saleId'], {})
@Index('IX_SplitParentID', ['splitQuantity', 'splitParentId'], {})
@Index('PK_SaleItem', ['saleItemId'], { unique: true })
@Entity('SaleItem', { schema: 'dbo' })
export class SaleItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleItemID',
    default: () => 'newsequentialid()',
  })
  saleItemId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'ItemIndex' })
  itemIndex!: number;

  @Column('nvarchar', { name: 'ItemName', nullable: true, length: 32 })
  itemName!: string | null;

  @Column('nvarchar', {
    name: 'ReceiptDescription',
    nullable: true,
    length: 20,
  })
  receiptDescription!: string | null;

  @Column('nvarchar', { name: 'Department', nullable: true, length: 10 })
  department!: string | null;

  @Column('int', { name: 'BasePrice' })
  basePrice!: number;

  @Column('smallint', { name: 'Flags' })
  flags!: number;

  @Column('tinyint', { name: 'WrkTaxFlags' })
  wrkTaxFlags!: number;

  @Column('tinyint', { name: 'OrigTaxFlags' })
  origTaxFlags!: number;

  @Column('binary', { name: 'DiscountFlags', nullable: true, length: 13 })
  discountFlags!: Buffer | null;

  @Column('binary', { name: 'DiscountApplied', nullable: true, length: 13 })
  discountApplied!: Buffer | null;

  @Column('int', { name: 'PrintOptions' })
  printOptions!: number;

  @Column('int', { name: 'WasPrinted' })
  wasPrinted!: number;

  @Column('int', { name: 'BergPLU' })
  bergPlu!: number;

  @Column('int', { name: 'RemotePrns' })
  remotePrns!: number;

  @Column('smallint', { name: 'EmpID' })
  empId!: number;

  @Column('tinyint', { name: 'OrderPriority' })
  orderPriority!: number;

  @Column('tinyint', { name: 'VoidReason' })
  voidReason!: number;

  @Column('binary', { name: 'CouponApplied', nullable: true, length: 13 })
  couponApplied!: Buffer | null;

  @Column('bit', { name: 'TogoSurcharge' })
  togoSurcharge!: boolean;

  @Column('bit', { name: 'IsModifier' })
  isModifier!: boolean;

  @Column('tinyint', { name: 'OldSplitLevel' })
  oldSplitLevel!: number;

  @Column('smallint', { name: 'VoidEmpID' })
  voidEmpId!: number;

  @Column('datetime', { name: 'VoidDate', nullable: true })
  voidDate!: Date | null;

  @Column('tinyint', { name: 'SplitQuantity' })
  splitQuantity!: number;

  @Column('bit', { name: 'IsNotTippable' })
  isNotTippable!: boolean;

  @Column('smallint', { name: 'CourseFireDelay' })
  courseFireDelay!: number;

  @Column('int', { name: 'CourseFireDateOffset' })
  courseFireDateOffset!: number;

  @Column('bit', { name: 'JustRerung' })
  justRerung!: boolean;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('nvarchar', { name: 'ModifierGroupItem', nullable: true, length: 32 })
  modifierGroupItem!: string | null;

  @Column('tinyint', { name: 'ModifierParent' })
  modifierParent!: number;

  @Column('tinyint', { name: 'SeriesIndex' })
  seriesIndex!: number;

  @Column('nvarchar', { name: 'GiftCardNum', nullable: true, length: 16 })
  giftCardNum!: string | null;

  @Column('tinyint', { name: 'GiftCardPrintOption' })
  giftCardPrintOption!: number;

  @Column('tinyint', { name: 'CourseNumber' })
  courseNumber!: number;

  @Column('bit', { name: 'IsPromoItem' })
  isPromoItem!: boolean;

  @Column('bit', { name: 'FollowsParent' })
  followsParent!: boolean;

  @Column('bit', { name: 'AreadySplit' })
  areadySplit!: boolean;

  @Column('bit', { name: 'IsOpenPriced' })
  isOpenPriced!: boolean;

  @Column('int', { name: 'SendTime' })
  sendTime!: number;

  @Column('bit', { name: 'IsRandomWeight' })
  isRandomWeight!: boolean;

  @Column('datetime', { name: 'TimedStartDate', nullable: true })
  timedStartDate!: Date | null;

  @Column('tinyint', { name: 'TimedIncrement' })
  timedIncrement!: number;

  @Column('int', { name: 'TimedMinimumPrice' })
  timedMinimumPrice!: number;

  @Column('datetime', { name: 'TimedEndDate', nullable: true })
  timedEndDate!: Date | null;

  @Column('tinyint', { name: 'VDUColor' })
  vduColor!: number;

  @Column('nvarchar', { name: 'ShortDescription', nullable: true, length: 6 })
  shortDescription!: string | null;

  @Column('tinyint', { name: 'OrderType' })
  orderType!: number;

  @Column('int', { name: 'TripleHigh' })
  tripleHigh!: number;

  @Column('int', { name: 'QuadHigh' })
  quadHigh!: number;

  @Column('int', { name: 'ItemWeight' })
  itemWeight!: number;

  @Column('tinyint', { name: 'PriceLevel' })
  priceLevel!: number;

  @Column('bit', { name: 'IsReload' })
  isReload!: boolean;

  @Column('nvarchar', { name: 'BankAuthCode', nullable: true, length: 24 })
  bankAuthCode!: string | null;

  @Column('datetime', { name: 'SoldDate', nullable: true })
  soldDate!: Date | null;

  @Column('int', { name: 'SurchargeDollars' })
  surchargeDollars!: number;

  @Column('int', { name: 'GrossPrice' })
  grossPrice!: number;

  @Column('int', { name: 'VATAmt' })
  vatAmt!: number;

  @Column('smallint', { name: 'Quantity' })
  quantity!: number;

  @Column('smallint', { name: 'LastRoundQuantity' })
  lastRoundQuantity!: number;

  @Column('smallint', { name: 'ThisRoundQuantity' })
  thisRoundQuantity!: number;

  @Column('int', { name: 'ActualPrice' })
  actualPrice!: number;

  @Column('int', { name: 'TaxablePrice' })
  taxablePrice!: number;

  @Column('smallint', { name: 'ParentIndex' })
  parentIndex!: number;

  @Column('nvarchar', { name: 'BankRefNumber', nullable: true, length: 128 })
  bankRefNumber!: string | null;

  @Column('bit', { name: 'IsIngredientProcessed', default: () => '(0)' })
  isIngredientProcessed!: boolean;

  @Column('binary', { name: 'SplitLevel', nullable: true, length: 12 })
  splitLevel!: Buffer | null;

  @Column('nvarchar', {
    name: 'BankAuthorizationCode',
    nullable: true,
    length: 24,
  })
  bankAuthorizationCode!: string | null;

  @Column('int', { name: 'TimedSplitCount', default: () => '(0)' })
  timedSplitCount!: number;

  @Column('int', { name: 'TimedSplitIndex', default: () => '(0)' })
  timedSplitIndex!: number;

  @Column('binary', {
    name: 'HasRemoteDescription',
    nullable: true,
    length: 32,
  })
  hasRemoteDescription!: Buffer | null;

  @Column('bit', { name: 'ItemWorkCenter', default: () => '(0)' })
  itemWorkCenter!: boolean;

  @Column('bit', { name: 'IsNotGratable', default: () => '(0)' })
  isNotGratable!: boolean;

  @Column('int', { name: 'TotalTax', default: () => '(0)' })
  totalTax!: number;

  @Column('datetime', { name: 'AddDate', nullable: true })
  addDate!: Date | null;

  @Column('bit', { name: 'ItemWasZeroQty', default: () => '(0)' })
  itemWasZeroQty!: boolean;

  @Column('int', { name: 'MobileUserID', default: () => '(0)' })
  mobileUserId!: number;

  @Column('nvarchar', {
    name: 'UPC',
    nullable: true,
    length: 32,
    default: () => "''",
  })
  upc!: string | null;

  @Column('tinyint', { name: 'ItemWorkCenterValue', default: () => '(0)' })
  itemWorkCenterValue!: number;

  @Column('int', { name: 'VatItemActualAmount', default: () => '(0)' })
  vatItemActualAmount!: number;

  @Column('int', { name: 'PBasePrice', default: () => '(0)' })
  pBasePrice!: number;

  @Column('int', { name: 'Flags2', default: () => '(0)' })
  flags2!: number;

  @Column('uniqueidentifier', {
    name: 'SplitParentID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  splitParentId!: string;

  @Column('int', { name: 'PriceLevelIndex', default: () => '(0)' })
  priceLevelIndex!: number;

  @Column('nvarchar', {
    name: 'PriceLevelName',
    length: 50,
    default: () => "''",
  })
  priceLevelName!: string;

  @Column('int', { name: 'PriceScheduleIndex', default: () => '(0)' })
  priceScheduleIndex!: number;

  @Column('nvarchar', {
    name: 'PriceScheduleName',
    length: 50,
    default: () => "''",
  })
  priceScheduleName!: string;

  @Column('int', { name: 'TranslationLanguage', default: () => '(0)' })
  translationLanguage!: number;

  @Column('nvarchar', { name: 'Translation', nullable: true, length: 50 })
  translation!: string | null;

  @Column('bit', { name: 'IsToGo', nullable: true })
  isToGo!: boolean | null;

  @Column('nvarchar', {
    name: 'FanConnectCustomerAccount',
    nullable: true,
    length: 40,
  })
  fanConnectCustomerAccount!: string | null;

  @ManyToOne(() => Sale, (sale) => sale.saleItems, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;

  @OneToMany(() => SaleItemCoupon, (saleItemCoupon) => saleItemCoupon.saleItem)
  saleItemCoupons!: SaleItemCoupon[];

  @OneToMany(
    () => SaleItemDiscount,
    (saleItemDiscount) => saleItemDiscount.saleItem
  )
  saleItemDiscounts!: SaleItemDiscount[];
}
