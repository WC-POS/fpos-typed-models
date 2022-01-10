import { Column, Entity, Index } from 'typeorm';

@Index('PK_EnterpriseEmployee', ['enterpriseEmployeeId'], { unique: true })
@Entity('EnterpriseEmployee', { schema: 'dbo' })
export class EnterpriseEmployee {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EnterpriseEmployeeID',
    default: () => 'newsequentialid()',
  })
  enterpriseEmployeeId!: string;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'Password' })
  password!: number;

  @Column('nvarchar', { name: 'LastName', nullable: true, length: 20 })
  lastName!: string | null;

  @Column('nvarchar', { name: 'FirstName', nullable: true, length: 20 })
  firstName!: string | null;

  @Column('nchar', { name: 'MiddleInitial', length: 10 })
  middleInitial!: string;

  @Column('datetime', { name: 'BirthDate', nullable: true })
  birthDate!: Date | null;

  @Column('nvarchar', { name: 'UserInfo', nullable: true, length: 40 })
  userInfo!: string | null;

  @Column('nvarchar', { name: 'Address', nullable: true, length: 64 })
  address!: string | null;

  @Column('nvarchar', { name: 'City', nullable: true, length: 16 })
  city!: string | null;

  @Column('nvarchar', { name: 'State', nullable: true, length: 2 })
  state!: string | null;

  @Column('nvarchar', { name: 'Zip', nullable: true, length: 16 })
  zip!: string | null;

  @Column('nvarchar', { name: 'Phone', nullable: true, length: 16 })
  phone!: string | null;

  @Column('binary', { name: 'SSN', nullable: true, length: 24 })
  ssn!: Buffer | null;

  @Column('bit', { name: 'FirstByteFlags' })
  firstByteFlags!: boolean;

  @Column('bit', { name: 'BtnMnt' })
  btnMnt!: boolean;

  @Column('bit', { name: 'CshrMnt' })
  cshrMnt!: boolean;

  @Column('bit', { name: 'ClsMnt' })
  clsMnt!: boolean;

  @Column('bit', { name: 'CpnMnt' })
  cpnMnt!: boolean;

  @Column('bit', { name: 'CustMnt' })
  custMnt!: boolean;

  @Column('bit', { name: 'CMCanVw' })
  cmCanVw!: boolean;

  @Column('bit', { name: 'CMCanAdj' })
  cmCanAdj!: boolean;

  @Column('bit', { name: 'CMCanClr' })
  cmCanClr!: boolean;

  @Column('bit', { name: 'BackOffice' })
  backOffice!: boolean;

  @Column('bit', { name: 'DptMnt' })
  dptMnt!: boolean;

  @Column('bit', { name: 'DrkMnt' })
  drkMnt!: boolean;

  @Column('bit', { name: 'DscMnt' })
  dscMnt!: boolean;

  @Column('bit', { name: 'EmpMnt' })
  empMnt!: boolean;

  @Column('bit', { name: 'EMAdjTips' })
  emAdjTips!: boolean;

  @Column('bit', { name: 'ChgEmpCls' })
  chgEmpCls!: boolean;

  @Column('bit', { name: 'EMCshDwrs' })
  emCshDwrs!: boolean;

  @Column('bit', { name: 'EMPayRates' })
  emPayRates!: boolean;

  @Column('bit', { name: 'EMSecLvl' })
  emSecLvl!: boolean;

  @Column('bit', { name: 'EMTmcrd' })
  emTmcrd!: boolean;

  @Column('bit', { name: 'EMPasswd' })
  emPasswd!: boolean;

  @Column('bit', { name: 'FDMnt' })
  fdMnt!: boolean;

  @Column('bit', { name: 'GCMnt' })
  gcMnt!: boolean;

  @Column('bit', { name: 'GCIssue' })
  gcIssue!: boolean;

  @Column('bit', { name: 'GCDestroy' })
  gcDestroy!: boolean;

  @Column('bit', { name: 'GCList' })
  gcList!: boolean;

  @Column('bit', { name: 'HlpMnt' })
  hlpMnt!: boolean;

  @Column('bit', { name: 'IngMnt' })
  ingMnt!: boolean;

  @Column('bit', { name: 'IGMAdj' })
  igmAdj!: boolean;

  @Column('bit', { name: 'ItmMnt' })
  itmMnt!: boolean;

  @Column('bit', { name: 'IMAdjPrc' })
  imAdjPrc!: boolean;

  @Column('bit', { name: 'MedMnt' })
  medMnt!: boolean;

  @Column('bit', { name: 'MsgMnt' })
  msgMnt!: boolean;

  @Column('bit', { name: 'PckLoan' })
  pckLoan!: boolean;

  @Column('bit', { name: 'PrcSchd' })
  prcSchd!: boolean;

  @Column('bit', { name: 'PresMod' })
  presMod!: boolean;

  @Column('bit', { name: 'ReasMnt' })
  reasMnt!: boolean;

  @Column('bit', { name: 'RegMnt' })
  regMnt!: boolean;

  @Column('bit', { name: 'ResMnt' })
  resMnt!: boolean;

  @Column('bit', { name: 'RSMnt' })
  rsMnt!: boolean;

  @Column('bit', { name: 'SchMnt' })
  schMnt!: boolean;

  @Column('bit', { name: 'SpcMnt' })
  spcMnt!: boolean;

  @Column('bit', { name: 'TaxMnt' })
  taxMnt!: boolean;

  @Column('bit', { name: 'TblMnt' })
  tblMnt!: boolean;

  @Column('bit', { name: 'VndMnt' })
  vndMnt!: boolean;

  @Column('bit', { name: 'ActRpt' })
  actRpt!: boolean;

  @Column('bit', { name: 'ChgInv' })
  chgInv!: boolean;

  @Column('bit', { name: 'CoupRpt' })
  coupRpt!: boolean;

  @Column('bit', { name: 'CSRpt' })
  csRpt!: boolean;

  @Column('bit', { name: 'CustLoyal' })
  custLoyal!: boolean;

  @Column('bit', { name: 'DscRpt' })
  dscRpt!: boolean;

  @Column('bit', { name: 'DupCRpt' })
  dupCRpt!: boolean;

  @Column('bit', { name: 'ECRpt' })
  ecRpt!: boolean;

  @Column('bit', { name: 'EJRpt' })
  ejRpt!: boolean;

  @Column('bit', { name: 'EmProRpt' })
  emProRpt!: boolean;

  @Column('bit', { name: 'EmSlsRpt' })
  emSlsRpt!: boolean;

  @Column('bit', { name: 'EmTpsRpt' })
  emTpsRpt!: boolean;

  @Column('bit', { name: 'ICRpt' })
  icRpt!: boolean;

  @Column('bit', { name: 'IPTRpt' })
  iptRpt!: boolean;

  @Column('bit', { name: 'LVSRpt' })
  lvsRpt!: boolean;

  @Column('bit', { name: 'MovRpt' })
  movRpt!: boolean;

  @Column('bit', { name: 'PdOutRpt' })
  pdOutRpt!: boolean;

  @Column('bit', { name: 'ReordRpt' })
  reordRpt!: boolean;

  @Column('bit', { name: 'CmSlsRpt' })
  cmSlsRpt!: boolean;

  @Column('bit', { name: 'SlsAcRpt' })
  slsAcRpt!: boolean;

  @Column('bit', { name: 'SlsRgRpt' })
  slsRgRpt!: boolean;

  @Column('bit', { name: 'SlsStRpt' })
  slsStRpt!: boolean;

  @Column('bit', { name: 'TBRpt' })
  tbRpt!: boolean;

  @Column('bit', { name: 'TCRpt' })
  tcRpt!: boolean;

  @Column('bit', { name: 'VIRpt' })
  viRpt!: boolean;

  @Column('bit', { name: 'WageRpt' })
  wageRpt!: boolean;

  @Column('bit', { name: 'WkMvRpt' })
  wkMvRpt!: boolean;

  @Column('bit', { name: 'EntEmpMnt' })
  entEmpMnt!: boolean;

  @Column('bit', { name: 'EEMSecurity' })
  eemSecurity!: boolean;

  @Column('bit', { name: 'EntSet' })
  entSet!: boolean;

  @Column('bit', { name: 'SBRGrph' })
  sbrGrph!: boolean;

  @Column('bit', { name: 'StoreRgn' })
  storeRgn!: boolean;

  @Column('bit', { name: 'LastByteFlags' })
  lastByteFlags!: boolean;

  @Column('bit', { name: 'BRRpt' })
  brRpt!: boolean;

  @Column('bit', { name: 'SWARpt' })
  swaRpt!: boolean;

  @Column('bit', { name: 'ZoneMnt' })
  zoneMnt!: boolean;

  @Column('bit', { name: 'RCSlsRpt' })
  rcSlsRpt!: boolean;

  @Column('bit', { name: 'IsInactive', default: () => '(0)' })
  isInactive!: boolean;

  @Column('bit', { name: 'BrkMnt', default: () => '(0)' })
  brkMnt!: boolean;

  @Column('bit', { name: 'LogRpt', default: () => '(0)' })
  logRpt!: boolean;

  @Column('bit', { name: 'EditDashboards', default: () => '(0)' })
  editDashboards!: boolean;

  @Column('bit', { name: 'AddDashPanel', default: () => '(0)' })
  addDashPanel!: boolean;

  @Column('bit', { name: 'EditFavorites', default: () => '(0)' })
  editFavorites!: boolean;

  @Column('bit', { name: 'EntSBR', default: () => '(0)' })
  entSbr!: boolean;

  @Column('bit', { name: 'AdDriverMnt', default: () => '(0)' })
  adDriverMnt!: boolean;

  @Column('bit', { name: 'SlsPdRpt', default: () => '(0)' })
  slsPdRpt!: boolean;

  @Column('bit', { name: 'SPRPT', default: () => '(0)' })
  sprpt!: boolean;

  @Column('bit', { name: 'DBSetup', default: () => '(0)' })
  dbSetup!: boolean;

  @Column('bit', { name: 'LicenseFuturePOS', default: () => '(0)' })
  licenseFuturePos!: boolean;

  @Column('bit', { name: 'FoodCostRpt', default: () => '(0)' })
  foodCostRpt!: boolean;

  @Column('bit', { name: 'EntSync', default: () => '(0)' })
  entSync!: boolean;

  @Column('bit', { name: 'CustChrgRpt', default: () => '(0)' })
  custChrgRpt!: boolean;

  @Column('bit', { name: 'CashReconMnt', default: () => '(0)' })
  cashReconMnt!: boolean;

  @Column('bit', { name: 'MnuMnt', default: () => '(0)' })
  mnuMnt!: boolean;

  @Column('bit', { name: 'BackupMnt', default: () => '(0)' })
  backupMnt!: boolean;

  @Column('bit', { name: 'CashOvrShortRpt', default: () => '(0)' })
  cashOvrShortRpt!: boolean;

  @Column('bit', { name: 'NetInstall', default: () => '(0)' })
  netInstall!: boolean;

  @Column('bit', { name: 'AlertMnt', default: () => '(0)' })
  alertMnt!: boolean;

  @Column('bit', { name: 'ISRpt', default: () => '(0)' })
  isRpt!: boolean;

  @Column('bit', { name: 'AbraPayroll', default: () => '(1)' })
  abraPayroll!: boolean;

  @Column('bit', { name: 'Accardis', default: () => '(1)' })
  accardis!: boolean;

  @Column('bit', { name: 'ADPPayroll', default: () => '(1)' })
  adpPayroll!: boolean;

  @Column('bit', { name: 'APSPayroll', default: () => '(1)' })
  apsPayroll!: boolean;

  @Column('bit', { name: 'CBSPayroll', default: () => '(1)' })
  cbsPayroll!: boolean;

  @Column('bit', { name: 'ChefTec', default: () => '(1)' })
  chefTec!: boolean;

  @Column('bit', { name: 'CostGuard', default: () => '(1)' })
  costGuard!: boolean;

  @Column('bit', { name: 'DeductIT', default: () => '(1)' })
  deductIt!: boolean;

  @Column('bit', { name: 'FoodTrak', default: () => '(1)' })
  foodTrak!: boolean;

  @Column('bit', { name: 'GreatPlainsGL', default: () => '(1)' })
  greatPlainsGl!: boolean;

  @Column('bit', { name: 'GreatPlainsPayroll', default: () => '(1)' })
  greatPlainsPayroll!: boolean;

  @Column('bit', { name: 'HeartlandPayroll', default: () => '(1)' })
  heartlandPayroll!: boolean;

  @Column('bit', { name: 'Mas90GL', default: () => '(1)' })
  mas90Gl!: boolean;

  @Column('bit', { name: 'Mas90Payroll', default: () => '(1)' })
  mas90Payroll!: boolean;

  @Column('bit', { name: 'MenuLinkGL', default: () => '(1)' })
  menuLinkGl!: boolean;

  @Column('bit', { name: 'MenuLinkPayroll', default: () => '(1)' })
  menuLinkPayroll!: boolean;

  @Column('bit', { name: 'MenuLinkSalesInterval', default: () => '(1)' })
  menuLinkSalesInterval!: boolean;

  @Column('bit', { name: 'MenuLink', default: () => '(1)' })
  menuLink!: boolean;

  @Column('bit', { name: 'PayChexPayroll', default: () => '(1)' })
  payChexPayroll!: boolean;

  @Column('bit', { name: 'PeachtreeGL', default: () => '(1)' })
  peachtreeGl!: boolean;

  @Column('bit', { name: 'QuickbooksGL', default: () => '(1)' })
  quickbooksGl!: boolean;

  @Column('bit', { name: 'QuickBooksPayroll', default: () => '(1)' })
  quickBooksPayroll!: boolean;

  @Column('bit', { name: 'SaaShrPayroll', default: () => '(1)' })
  saaShrPayroll!: boolean;

  @Column('bit', { name: 'EnterpriseBulkDownloader', default: () => '(1)' })
  enterpriseBulkDownloader!: boolean;

  @Column('bit', { name: 'WinSched', default: () => '(1)' })
  winSched!: boolean;

  @Column('bit', { name: 'WSExprt', default: () => '(1)' })
  wsExprt!: boolean;

  @Column('bit', { name: 'WSImprt', default: () => '(1)' })
  wsImprt!: boolean;

  @Column('bit', { name: 'DinePointDump', default: () => '(0)' })
  dinePointDump!: boolean;

  @Column('bit', { name: 'PurgeOldData', default: () => '(1)' })
  purgeOldData!: boolean;

  @Column('bit', { name: 'ResetDatabase', default: () => '(1)' })
  resetDatabase!: boolean;

  @Column('bit', { name: 'ServiceManager', default: () => '(1)' })
  serviceManager!: boolean;

  @Column('bit', { name: 'GCReconciliation', default: () => '(1)' })
  gcReconciliation!: boolean;

  @Column('bit', { name: 'EntICRpt', default: () => '(1)' })
  entIcRpt!: boolean;

  @Column('bit', { name: 'EntFrontEnd', default: () => '(1)' })
  entFrontEnd!: boolean;

  @Column('bit', { name: 'EndofDay', default: () => '(1)' })
  endofDay!: boolean;

  @Column('bit', { name: 'EffectiveWageRpt', default: () => '(0)' })
  effectiveWageRpt!: boolean;

  @Column('bit', { name: 'TipPoolMnt', default: () => '(0)' })
  tipPoolMnt!: boolean;

  @Column('bit', { name: 'PagerDriver', default: () => '(0)' })
  pagerDriver!: boolean;

  @Column('bit', { name: 'PagerMaint', default: () => '(0)' })
  pagerMaint!: boolean;

  @Column('bit', { name: 'DailySalesByMonthReport', default: () => '(0)' })
  dailySalesByMonthReport!: boolean;

  @Column('bit', { name: 'MobileRegistration', default: () => '(0)' })
  mobileRegistration!: boolean;

  @Column('bit', { name: 'CMViewLoyalty', default: () => '(0)' })
  cmViewLoyalty!: boolean;

  @Column('bit', { name: 'Mas90EmployeeWage', default: () => '(0)' })
  mas90EmployeeWage!: boolean;

  @Column('bit', { name: 'InventoryList', default: () => '(0)' })
  inventoryList!: boolean;

  @Column('bit', { name: 'AdjMeals', default: () => '(0)' })
  adjMeals!: boolean;

  @Column('bit', { name: 'CMCanEditCC', default: () => '(0)' })
  cmCanEditCc!: boolean;

  @Column('bit', { name: 'CustCanEditFD', default: () => '(0)' })
  custCanEditFd!: boolean;

  @Column('bit', { name: 'CustCanEditUserData', default: () => '(0)' })
  custCanEditUserData!: boolean;

  @Column('bit', { name: 'EMPCanChgBOPass', default: () => '(0)' })
  empCanChgBoPass!: boolean;

  @Column('bit', { name: 'IMCanDelete', default: () => '(0)' })
  imCanDelete!: boolean;

  @Column('bit', { name: 'EJRptCanViewCCs', default: () => '(0)' })
  ejRptCanViewCCs!: boolean;

  @Column('bit', { name: 'CanResetActFile', default: () => '(0)' })
  canResetActFile!: boolean;

  @Column('bit', { name: 'EnterpriseBulkUploader', default: () => '(0)' })
  enterpriseBulkUploader!: boolean;

  @Column('bit', { name: 'GenericPayroll', default: () => '(0)' })
  genericPayroll!: boolean;

  @Column('bit', { name: 'CustomerTransaction', default: () => '(0)' })
  customerTransaction!: boolean;

  @Column('bit', { name: 'ComparativeItemSales', default: () => '(0)' })
  comparativeItemSales!: boolean;

  @Column('bit', { name: 'QuickBooksExport', default: () => '(0)' })
  quickBooksExport!: boolean;

  @Column('bit', { name: 'ScheduledUpdateMaintenance', default: () => '(0)' })
  scheduledUpdateMaintenance!: boolean;

  @Column('bit', { name: 'SUMCanDelete', default: () => '(0)' })
  sumCanDelete!: boolean;

  @Column('bit', { name: 'SalesPerformance', default: () => '(0)' })
  salesPerformance!: boolean;

  @Column('bit', { name: 'ItemSales', default: () => '(0)' })
  itemSales!: boolean;

  @Column('bit', { name: 'DataGroupMaintenance', default: () => '(0)' })
  dataGroupMaintenance!: boolean;

  @Column('binary', { name: 'EncryptedPassword', nullable: true, length: 16 })
  encryptedPassword!: Buffer | null;

  @Column('bit', { name: 'NeedPasswordEncryption', default: () => '(1)' })
  needPasswordEncryption!: boolean;

  @Column('bit', { name: 'EEMCanEditPassword', default: () => '(0)' })
  eemCanEditPassword!: boolean;

  @Column('bit', { name: 'StoreAccountabilityReport', default: () => '(0)' })
  storeAccountabilityReport!: boolean;

  @Column('bit', { name: 'ItemSize', default: () => '(0)' })
  itemSize!: boolean;

  @Column('bit', { name: 'ItemSizeDelete', default: () => '(0)' })
  itemSizeDelete!: boolean;

  @Column('binary', { name: 'Salt', nullable: true, length: 24 })
  salt!: Buffer | null;

  @Column('binary', { name: 'BackOfficeHash', nullable: true, length: 32 })
  backOfficeHash!: Buffer | null;

  @Column('bit', { name: 'ResourceManager', default: () => '(0)' })
  resourceManager!: boolean;
}
