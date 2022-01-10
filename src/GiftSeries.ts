import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GiftSeriesAvailability } from './GiftSeriesAvailability';
import { GiftSeriesObject } from './GiftSeriesObject';

@Index('PK_GiftSeries', ['giftSeriesId'], { unique: true })
@Entity('GiftSeries', { schema: 'dbo' })
export class GiftSeries {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftSeriesID',
    default: () => 'newsequentialid()',
  })
  giftSeriesId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('smallint', { name: 'SeriesIndex' })
  seriesIndex!: number;

  @Column('nvarchar', { name: 'SeriesName', length: 32 })
  seriesName!: string;

  @Column('bit', { name: 'AutoNumber' })
  autoNumber!: boolean;

  @Column('bigint', { name: 'StartNumber' })
  startNumber!: string;

  @Column('nvarchar', { name: 'Prefix', nullable: true, length: 16 })
  prefix!: string | null;

  @Column('nvarchar', { name: 'Suffix', nullable: true, length: 16 })
  suffix!: string | null;

  @Column('bit', { name: 'RedeemExpired' })
  redeemExpired!: boolean;

  @Column('bit', { name: 'AllowPartial' })
  allowPartial!: boolean;

  @Column('tinyint', { name: 'PartialType' })
  partialType!: number;

  @Column('tinyint', { name: 'ExpirationType' })
  expirationType!: number;

  @Column('smallint', { name: 'ExpiresAfterType' })
  expiresAfterType!: number;

  @Column('tinyint', { name: 'ExpiresAfterCount' })
  expiresAfterCount!: number;

  @Column('datetime', { name: 'ExpirationDate', nullable: true })
  expirationDate!: Date | null;

  @Column('bit', { name: 'IsMagneticCard' })
  isMagneticCard!: boolean;

  @Column('int', { name: 'PageWidth' })
  pageWidth!: number;

  @Column('int', { name: 'PageHeight' })
  pageHeight!: number;

  @Column('int', { name: 'TopMargin' })
  topMargin!: number;

  @Column('int', { name: 'BottomMargin' })
  bottomMargin!: number;

  @Column('int', { name: 'LeftMargin' })
  leftMargin!: number;

  @Column('int', { name: 'RightMargin' })
  rightMargin!: number;

  @Column('int', { name: 'ColumnMargin' })
  columnMargin!: number;

  @Column('int', { name: 'RowMargin' })
  rowMargin!: number;

  @Column('tinyint', { name: 'ColumnCount' })
  columnCount!: number;

  @Column('tinyint', { name: 'RowCount' })
  rowCount!: number;

  @Column('tinyint', { name: 'ReissueType' })
  reissueType!: number;

  @Column('int', { name: 'CashRefundUpTo' })
  cashRefundUpTo!: number;

  @Column('tinyint', { name: 'AvailabliityType' })
  availabliityType!: number;

  @Column('binary', { name: 'DiscountFlags', nullable: true, length: 13 })
  discountFlags!: Buffer | null;

  @Column('int', { name: 'ObjectCount' })
  objectCount!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('smallint', { name: 'ExpirationValue', default: () => '(0)' })
  expirationValue!: number;

  @Column('tinyint', { name: 'ExpirationInterval', default: () => '(0)' })
  expirationInterval!: number;

  @Column('bit', { name: 'SeriesCannotBeSold', default: () => '(0)' })
  seriesCannotBeSold!: boolean;

  @Column('bit', { name: 'IsDonation', default: () => '(0)' })
  isDonation!: boolean;

  @OneToMany(
    () => GiftSeriesAvailability,
    (giftSeriesAvailability) => giftSeriesAvailability.giftSeries
  )
  giftSeriesAvailabilities!: GiftSeriesAvailability[];

  @OneToMany(
    () => GiftSeriesObject,
    (giftSeriesObject) => giftSeriesObject.giftSeries
  )
  giftSeriesObjects!: GiftSeriesObject[];
}
