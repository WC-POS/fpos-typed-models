import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CustomerRating } from './CustomerRating';
import { SaleCoupon } from './SaleCoupon';
import { SaleCreditCard } from './SaleCreditCard';
import { SaleDiscount } from './SaleDiscount';
import { SaleGiftSold } from './SaleGiftSold';
import { SaleGiftUsed } from './SaleGiftUsed';
import { SaleItem } from './SaleItem';
import { SaleLoyalty } from './SaleLoyalty';
import { SaleMedia } from './SaleMedia';
import { SalePms } from './SalePms';
import { SaleShare } from './SaleShare';
import { SaleTax } from './SaleTax';
import { SaleTender } from './SaleTender';

@Index('IX_Sale', ['storeId', 'isSuspend'], {})
@Index('IX_Sale_CheckNumber', ['checkNumber'], {})
@Index('IX_Sale_CurrentEmpID', ['currentEmpId'], {})
@Index('IX_Sale_DataVersion', ['dataVersion'], {})
@Index('IX_Sale_FinishDate', ['endDate'], {})
@Index('IX_Sale_IsSuspend', ['isSuspend'], {})
@Index('IX_Sale_ReOpenCheckNumber', ['reOpenCheckNumber'], {})
@Index('IX_Sale_StartDate', ['startDate'], {})
@Index('IX_Sale_SuspendList', ['storeId', 'isSuspend', 'currentEmpId'], {})
@Index('IX_Sale_SuspendNumber', ['suspendNumber'], {})
@Index('IX_Sale_TerminalSuspends', ['isSuspend', 'terminalNumber'], {})
@Index('PK_EJSaleHeader', ['saleId'], { unique: true })
@Entity('Sale', { schema: 'dbo' })
export class Sale {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleID',
    default: () => 'newsequentialid()',
  })
  saleId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('bit', { name: 'IsSuspend', default: () => '(0)' })
  isSuspend!: boolean;

  @Column('tinyint', { name: 'WasReopened' })
  wasReopened!: number;

  @Column('tinyint', { name: 'IsTrainMode' })
  isTrainMode!: number;

  @Column('tinyint', { name: 'IsNegativeSale' })
  isNegativeSale!: number;

  @Column('tinyint', { name: 'IsCancelled' })
  isCancelled!: number;

  @Column('tinyint', { name: 'IsEncrypted' })
  isEncrypted!: number;

  @Column('tinyint', { name: 'WasRefunded' })
  wasRefunded!: number;

  @Column('tinyint', { name: 'CheckWasPrinted' })
  checkWasPrinted!: number;

  @Column('tinyint', { name: 'DescriptionEdited' })
  descriptionEdited!: number;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('smallint', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('tinyint', { name: 'CheckType' })
  checkType!: number;

  @Column('smallint', { name: 'CustomerCount' })
  customerCount!: number;

  @Column('smallint', { name: 'TableIndex' })
  tableIndex!: number;

  @Column('int', { name: 'StartedEmpID', default: () => '(0)' })
  startedEmpId!: number;

  @Column('int', { name: 'TransferEmpID', default: () => '(0)' })
  transferEmpId!: number;

  @Column('int', { name: 'SettledEmpID', default: () => '(0)' })
  settledEmpId!: number;

  @Column('nvarchar', { name: 'CheckDescription', nullable: true, length: 50 })
  checkDescription!: string | null;

  @Column('smallint', { name: 'ItemCount' })
  itemCount!: number;

  @Column('tinyint', { name: 'CheckStatus' })
  checkStatus!: number;

  @Column('tinyint', { name: 'IsRetrieved' })
  isRetrieved!: number;

  @Column('int', { name: 'SubTotal' })
  subTotal!: number;

  @Column('int', { name: 'GratuityPercent' })
  gratuityPercent!: number;

  @Column('int', { name: 'GratuityAmount' })
  gratuityAmount!: number;

  @Column('int', { name: 'Total' })
  total!: number;

  @Column('int', { name: 'SuspendNumber' })
  suspendNumber!: number;

  @Column('tinyint', { name: 'ForgiveTaxMask' })
  forgiveTaxMask!: number;

  @Column('tinyint', { name: 'CustomerEntered' })
  customerEntered!: number;

  @Column('tinyint', { name: 'FTaxToggle' })
  fTaxToggle!: number;

  @Column('tinyint', { name: 'TogoFTax' })
  togoFTax!: number;

  @Column('int', { name: 'OvertAmount' })
  overtAmount!: number;

  @Column('tinyint', { name: 'RecPrtOpts' })
  recPrtOpts!: number;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('tinyint', { name: 'DrawerNumber' })
  drawerNumber!: number;

  @Column('datetime', { name: 'PromisedDate', nullable: true })
  promisedDate!: Date | null;

  @Column('smallint', { name: 'DriverID' })
  driverId!: number;

  @Column('smallint', { name: 'OrderTakerEmpID' })
  orderTakerEmpId!: number;

  @Column('int', { name: 'SurchargeDollars' })
  surchargeDollars!: number;

  @Column('int', { name: 'OrderPrintTime' })
  orderPrintTime!: number;

  @Column('tinyint', { name: 'OvertMedia' })
  overtMedia!: number;

  @Column('int', { name: 'EmpTips' })
  empTips!: number;

  @Column('int', { name: 'HouseTips' })
  houseTips!: number;

  @Column('tinyint', { name: 'ExpCourse' })
  expCourse!: number;

  @Column('int', { name: 'CurrentEmpID', default: () => '(0)' })
  currentEmpId!: number;

  @Column('int', { name: 'DueRound' })
  dueRound!: number;

  @Column('tinyint', { name: 'OrderType' })
  orderType!: number;

  @Column('smallint', { name: 'StartTerminalNumber' })
  startTerminalNumber!: number;

  @Column('tinyint', { name: 'CurrentCourse' })
  currentCourse!: number;

  @Column('int', { name: 'OrigionalSubTotal' })
  origionalSubTotal!: number;

  @Column('tinyint', { name: 'SplitNum' })
  splitNum!: number;

  @Column('datetime', { name: 'AssignDriverDate', nullable: true })
  assignDriverDate!: Date | null;

  @Column('tinyint', { name: 'ZoneChargeIndex' })
  zoneChargeIndex!: number;

  @Column('int', { name: 'ZoneChargeAmount' })
  zoneChargeAmount!: number;

  @Column('tinyint', { name: 'TipCashier' })
  tipCashier!: number;

  @Column('int', { name: 'PreAuthAmt' })
  preAuthAmt!: number;

  @Column('tinyint', { name: 'NoSmartVAT' })
  noSmartVat!: number;

  @Column('tinyint', { name: 'GratuityDecimalPlaces' })
  gratuityDecimalPlaces!: number;

  @Column('tinyint', { name: 'CustomerPriceLevel' })
  customerPriceLevel!: number;

  @Column('tinyint', { name: 'SectionPriceLevel' })
  sectionPriceLevel!: number;

  @Column('tinyint', { name: 'SaleSection' })
  saleSection!: number;

  @Column('tinyint', { name: 'LightState' })
  lightState!: number;

  @Column('tinyint', { name: 'SalePriceLevel' })
  salePriceLevel!: number;

  @Column('binary', {
    name: 'PreCardNum',
    nullable: true,
    length: 40,
    default: () => '(0)',
  })
  preCardNum!: Buffer | null;

  @Column('binary', {
    name: 'PreExpirationDate',
    nullable: true,
    length: 16,
    default: () => '(0)',
  })
  preExpirationDate!: Buffer | null;

  @Column('binary', {
    name: 'PreTrack2',
    nullable: true,
    length: 48,
    default: () => '(0)',
  })
  preTrack2!: Buffer | null;

  @Column('binary', { name: 'PreCardName', nullable: true, length: 40 })
  preCardName!: Buffer | null;

  @Column('binary', { name: 'PreAuthResponse', nullable: true, length: 32 })
  preAuthResponse!: Buffer | null;

  @Column('tinyint', { name: 'PreMedia' })
  preMedia!: number;

  @Column('int', { name: 'CreditCardCount' })
  creditCardCount!: number;

  @Column('int', { name: 'GiftSoldCount' })
  giftSoldCount!: number;

  @Column('int', { name: 'GiftUsedCount' })
  giftUsedCount!: number;

  @Column('int', { name: 'PMSCount' })
  pmsCount!: number;

  @Column('int', { name: 'ReOpenCheckNumber' })
  reOpenCheckNumber!: number;

  @Column('tinyint', { name: 'NoSBOutput' })
  noSbOutput!: number;

  @Column('tinyint', { name: 'GratuityEdited' })
  gratuityEdited!: number;

  @Column('tinyint', { name: 'TenderCount' })
  tenderCount!: number;

  @Column('tinyint', { name: 'RevenueCenter' })
  revenueCenter!: number;

  @Column('nvarchar', { name: 'CustomerName', nullable: true, length: 50 })
  customerName!: string | null;

  @Column('nvarchar', { name: 'CustomerAddress', nullable: true, length: 65 })
  customerAddress!: string | null;

  @Column('nvarchar', { name: 'EmployeeName', nullable: true, length: 50 })
  employeeName!: string | null;

  @Column('nvarchar', { name: 'DriverName', nullable: true, length: 50 })
  driverName!: string | null;

  @Column('tinyint', { name: 'ExtChkStatus' })
  extChkStatus!: number;

  @Column('tinyint', { name: 'OvertenderOption' })
  overtenderOption!: number;

  @Column('tinyint', { name: 'OvertenderIsTip' })
  overtenderIsTip!: number;

  @Column('smallint', { name: 'ShareCount' })
  shareCount!: number;

  @Column('nvarchar', { name: 'WebLastName', nullable: true, length: 50 })
  webLastName!: string | null;

  @Column('nvarchar', { name: 'WebFirstName', nullable: true, length: 50 })
  webFirstName!: string | null;

  @Column('tinyint', { name: 'WebMiddleInitial' })
  webMiddleInitial!: number;

  @Column('nvarchar', { name: 'WebPhone', nullable: true, length: 50 })
  webPhone!: string | null;

  @Column('nvarchar', { name: 'WebAddress1', nullable: true, length: 65 })
  webAddress1!: string | null;

  @Column('nvarchar', { name: 'WebAddress2', nullable: true, length: 65 })
  webAddress2!: string | null;

  @Column('nvarchar', { name: 'WebCity', nullable: true, length: 50 })
  webCity!: string | null;

  @Column('nvarchar', { name: 'WebState', nullable: true, length: 2 })
  webState!: string | null;

  @Column('nvarchar', { name: 'WebZip', nullable: true, length: 50 })
  webZip!: string | null;

  @Column('nvarchar', { name: 'WebEmail', nullable: true, length: 255 })
  webEmail!: string | null;

  @Column('nvarchar', { name: 'WebComment', nullable: true, length: 600 })
  webComment!: string | null;

  @Column('datetime', { name: 'UpdateDate', nullable: true })
  updateDate!: Date | null;

  @Column('int', { name: 'CustomerDiscount', default: () => '(0)' })
  customerDiscount!: number;

  @Column('nvarchar', { name: 'TabOutCode', nullable: true, length: 10 })
  tabOutCode!: string | null;

  @Column('bit', { name: 'TipsBeenChanged', default: () => '(0)' })
  tipsBeenChanged!: boolean;

  @Column('bit', { name: 'IsCombined', default: () => '(0)' })
  isCombined!: boolean;

  @Column('int', { name: 'CombinedCheckNumber', default: () => '(0)' })
  combinedCheckNumber!: number;

  @Column('int', { name: 'ZoneDriverAmount', default: () => '(0)' })
  zoneDriverAmount!: number;

  @Column('bit', { name: 'PreIsE2EEncryption', default: () => '(0)' })
  preIsE2EEncryption!: boolean;

  @Column('binary', { name: 'PreEncryptedBlock', nullable: true, length: 232 })
  preEncryptedBlock!: Buffer | null;

  @Column('binary', { name: 'PreEncryptionKey', nullable: true, length: 40 })
  preEncryptionKey!: Buffer | null;

  @Column('int', { name: 'PreCardSource', default: () => '(0)' })
  preCardSource!: number;

  @Column('int', { name: 'LanStatus', default: () => '(0)' })
  lanStatus!: number;

  @Column('int', { name: 'WebOrderCustomerID', default: () => '(0)' })
  webOrderCustomerId!: number;

  @Column('bit', { name: 'IsWebOrderComplete', default: () => '(0)' })
  isWebOrderComplete!: boolean;

  @Column('tinyint', { name: 'WrkTaxFlags', default: () => '(0)' })
  wrkTaxFlags!: number;

  @Column('tinyint', { name: 'OrigTaxFlags', default: () => '(0)' })
  origTaxFlags!: number;

  @Column('bit', { name: 'IDProvided', default: () => '(0)' })
  idProvided!: boolean;

  @Column('binary', { name: 'PreReferenceNumber', nullable: true, length: 24 })
  preReferenceNumber!: Buffer | null;

  @Column('int', { name: 'LoyaltyLookupResult', default: () => '(0)' })
  loyaltyLookupResult!: number;

  @Column('int', { name: 'TicketNumber', default: () => '(0)' })
  ticketNumber!: number;

  @Column('int', { name: 'LevelUpOrderID', default: () => '(0)' })
  levelUpOrderId!: number;

  @Column('nvarchar', {
    name: 'PaydiantTransactionRefID',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  paydiantTransactionRefId!: string | null;

  @Column('nvarchar', {
    name: 'PaydiantCheckoutToken',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  paydiantCheckoutToken!: string | null;

  @Column('int', { name: 'PSubTotal', default: () => '(0)' })
  pSubTotal!: number;

  @Column('smallint', { name: 'SuspendNumberTerminal', default: () => '(0)' })
  suspendNumberTerminal!: number;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('int', { name: 'ServiceChargeAmount', default: () => '(0)' })
  serviceChargeAmount!: number;

  @Column('int', { name: 'ServiceChargePercent', default: () => '(0)' })
  serviceChargePercent!: number;

  @Column('tinyint', { name: 'ServiceChargeEdited', default: () => '(0)' })
  serviceChargeEdited!: number;

  @Column('tinyint', {
    name: 'ServiceChargeDecimalPlaces',
    default: () => '(0)',
  })
  serviceChargeDecimalPlaces!: number;

  @Column('bit', { name: 'ZoneIsServiceCharge', default: () => '(0)' })
  zoneIsServiceCharge!: boolean;

  @Column('binary', {
    name: 'PreEncryptedRawSwipe',
    nullable: true,
    length: 1024,
  })
  preEncryptedRawSwipe!: Buffer | null;

  @Column('int', { name: 'PZeroRated', default: () => '(0)' })
  pZeroRated!: number;

  @Column('binary', { name: 'PreVaultID', nullable: true, length: 128 })
  preVaultId!: Buffer | null;

  @Column('binary', { name: 'PreReferenceData', nullable: true, length: 48 })
  preReferenceData!: Buffer | null;

  @Column('binary', { name: 'PreProcessData', nullable: true, length: 48 })
  preProcessData!: Buffer | null;

  @Column('binary', {
    name: 'PreEMVApplicationLabel',
    nullable: true,
    length: 48,
  })
  preEmvApplicationLabel!: Buffer | null;

  @Column('binary', { name: 'PreEMVAID', nullable: true, length: 48 })
  preEmvaid!: Buffer | null;

  @Column('binary', { name: 'PreEMVTVR', nullable: true, length: 48 })
  preEmvtvr!: Buffer | null;

  @Column('binary', { name: 'PreEMVIAD', nullable: true, length: 48 })
  preEmviad!: Buffer | null;

  @Column('binary', { name: 'PreEMVTSI', nullable: true, length: 48 })
  preEmvtsi!: Buffer | null;

  @Column('binary', { name: 'PreEMVARC', nullable: true, length: 48 })
  preEmvarc!: Buffer | null;

  @Column('binary', { name: 'PreEMVCVM', nullable: true, length: 48 })
  preEmvcvm!: Buffer | null;

  @Column('binary', { name: 'PreEMVEntryMethod', nullable: true, length: 48 })
  preEmvEntryMethod!: Buffer | null;

  @Column('binary', { name: 'PreZip', nullable: true, length: 24 })
  preZip!: Buffer | null;

  @Column('nvarchar', { name: 'LevelUpUUID', length: 64, default: () => "''" })
  levelUpUuid!: string;

  @Column('datetime', { name: 'BucketProcessDate', nullable: true })
  bucketProcessDate!: Date | null;

  @Column('bit', { name: 'PreUsedToSettle', default: () => '(0)' })
  preUsedToSettle!: boolean;

  @Column('nvarchar', {
    name: 'ReportPreCardNumber',
    nullable: true,
    length: 40,
  })
  reportPreCardNumber!: string | null;

  @Column('nvarchar', { name: 'ReportPreCardName', nullable: true, length: 40 })
  reportPreCardName!: string | null;

  @Column('nvarchar', {
    name: 'ReportPreAuthResponse',
    nullable: true,
    length: 40,
  })
  reportPreAuthResponse!: string | null;

  @Column('nvarchar', { name: 'ReportPreTranID', nullable: true, length: 40 })
  reportPreTranId!: string | null;

  @Column('nvarchar', { name: 'ReportPreZipCode', nullable: true, length: 40 })
  reportPreZipCode!: string | null;

  @Column('nvarchar', { name: 'ReportPreCardType', nullable: true, length: 40 })
  reportPreCardType!: string | null;

  @Column('nvarchar', { name: 'MozartOrderNumber', nullable: true, length: 50 })
  mozartOrderNumber!: string | null;

  @Column('int', { name: 'MozartOrderType', default: () => '(0)' })
  mozartOrderType!: number;

  @Column('nvarchar', {
    name: 'FanConnectCustomerAccount',
    nullable: true,
    length: 40,
  })
  fanConnectCustomerAccount!: string | null;

  @Column('nvarchar', {
    name: 'FanConnectTransactionID',
    nullable: true,
    length: 40,
  })
  fanConnectTransactionId!: string | null;

  @OneToMany(() => CustomerRating, (customerRating) => customerRating.sale)
  customerRatings!: CustomerRating[];

  @OneToMany(() => SaleCoupon, (saleCoupon) => saleCoupon.sale)
  saleCoupons!: SaleCoupon[];

  @OneToMany(() => SaleCreditCard, (saleCreditCard) => saleCreditCard.sale)
  saleCreditCards!: SaleCreditCard[];

  @OneToMany(() => SaleDiscount, (saleDiscount) => saleDiscount.sale)
  saleDiscounts!: SaleDiscount[];

  @OneToMany(() => SaleGiftSold, (saleGiftSold) => saleGiftSold.sale)
  saleGiftSolds!: SaleGiftSold[];

  @OneToMany(() => SaleGiftUsed, (saleGiftUsed) => saleGiftUsed.sale)
  saleGiftUseds!: SaleGiftUsed[];

  @OneToMany(() => SaleItem, (saleItem) => saleItem.sale)
  saleItems!: SaleItem[];

  @OneToMany(() => SaleLoyalty, (saleLoyalty) => saleLoyalty.sale)
  saleLoyalties!: SaleLoyalty[];

  @OneToMany(() => SaleMedia, (saleMedia) => saleMedia.sale)
  saleMedias!: SaleMedia[];

  @OneToMany(() => SalePms, (salePms) => salePms.sale)
  salePms!: SalePms[];

  @OneToMany(() => SaleShare, (saleShare) => saleShare.sale)
  saleShares!: SaleShare[];

  @OneToMany(() => SaleTax, (saleTax) => saleTax.sale)
  saleTaxes!: SaleTax[];

  @OneToMany(() => SaleTender, (saleTender) => saleTender.sale)
  saleTenders!: SaleTender[];
}
