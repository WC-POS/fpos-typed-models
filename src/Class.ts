import { Column, Entity, Index } from 'typeorm';

@Index('IX_Class', ['regionId', 'classIndex'], {})
@Index('PK_Class', ['classId'], { unique: true })
@Entity('Class', { schema: 'dbo' })
export class Class {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ClassID',
    default: () => 'newsequentialid()',
  })
  classId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'ClassIndex' })
  classIndex!: number;

  @Column('nvarchar', { name: 'ClassName', length: 20 })
  className!: string;

  @Column('datetime', { name: 'PayPeriodRefDate', nullable: true })
  payPeriodRefDate!: Date | null;

  @Column('smallint', { name: 'PayPeriodType' })
  payPeriodType!: number;

  @Column('smallint', { name: 'EarlyInLockout' })
  earlyInLockout!: number;

  @Column('smallint', { name: 'InRound' })
  inRound!: number;

  @Column('smallint', { name: 'InGrace' })
  inGrace!: number;

  @Column('smallint', { name: 'LateInLockout' })
  lateInLockout!: number;

  @Column('smallint', { name: 'EarlyOutLockout' })
  earlyOutLockout!: number;

  @Column('smallint', { name: 'OutRound' })
  outRound!: number;

  @Column('smallint', { name: 'OutGrace' })
  outGrace!: number;

  @Column('smallint', { name: 'LateOutLockout' })
  lateOutLockout!: number;

  @Column('smallint', { name: 'MealDedLimit' })
  mealDedLimit!: number;

  @Column('smallint', { name: 'MealDedAmt' })
  mealDedAmt!: number;

  @Column('smallint', { name: 'DailyOTlimit' })
  dailyOTlimit!: number;

  @Column('smallint', { name: 'WeeklyOTlimit' })
  weeklyOTlimit!: number;

  @Column('bit', { name: 'CanPnchUnschd' })
  canPnchUnschd!: boolean;

  @Column('bit', { name: 'EmpHasTips' })
  empHasTips!: boolean;

  @Column('smallint', { name: 'LateInDock' })
  lateInDock!: number;

  @Column('smallint', { name: 'EarlyOutDock' })
  earlyOutDock!: number;

  @Column('bit', { name: 'FrontEnd' })
  frontEnd!: boolean;

  @Column('bit', { name: 'FE_DSRpt' })
  feDsRpt!: boolean;

  @Column('bit', { name: 'FE_SCRpt' })
  feScRpt!: boolean;

  @Column('bit', { name: 'FE_RCRpt' })
  feRcRpt!: boolean;

  @Column('bit', { name: 'BackOffice' })
  backOffice!: boolean;

  @Column('bit', { name: 'BtnMnt' })
  btnMnt!: boolean;

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

  @Column('bit', { name: 'DataMgr' })
  dataMgr!: boolean;

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

  @Column('bit', { name: 'GCMnt' })
  gcMnt!: boolean;

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

  @Column('bit', { name: 'Unused' })
  unused!: boolean;

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

  @Column('bit', { name: 'EJRpt' })
  ejRpt!: boolean;

  @Column('bit', { name: 'EmProRpt' })
  emProRpt!: boolean;

  @Column('bit', { name: 'EmSlsRpt' })
  emSlsRpt!: boolean;

  @Column('bit', { name: 'EmTpsRpt' })
  emTpsRpt!: boolean;

  @Column('bit', { name: 'LVSRpt' })
  lvsRpt!: boolean;

  @Column('bit', { name: 'MovRpt' })
  movRpt!: boolean;

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

  @Column('bit', { name: 'WageRpt' })
  wageRpt!: boolean;

  @Column('bit', { name: 'WkMvRpt' })
  wkMvRpt!: boolean;

  @Column('bit', { name: 'CshrMnt' })
  cshrMnt!: boolean;

  @Column('bit', { name: 'ICRpt' })
  icRpt!: boolean;

  @Column('bit', { name: 'VIRpt' })
  viRpt!: boolean;

  @Column('bit', { name: 'GCIssue' })
  gcIssue!: boolean;

  @Column('bit', { name: 'GCDestroy' })
  gcDestroy!: boolean;

  @Column('bit', { name: 'GCList' })
  gcList!: boolean;

  @Column('bit', { name: 'DupCRpt' })
  dupCRpt!: boolean;

  @Column('bit', { name: 'FE_CshRpt' })
  feCshRpt!: boolean;

  @Column('bit', { name: 'FDMnt' })
  fdMnt!: boolean;

  @Column('bit', { name: 'PdOutRpt' })
  pdOutRpt!: boolean;

  @Column('bit', { name: 'IPTRpt' })
  iptRpt!: boolean;

  @Column('bit', { name: 'ECRpt' })
  ecRpt!: boolean;

  @Column('bit', { name: 'CMCanClr' })
  cmCanClr!: boolean;

  @Column('bit', { name: 'SlsPdRpt' })
  slsPdRpt!: boolean;

  @Column('bit', { name: 'AdjMeals' })
  adjMeals!: boolean;

  @Column('bit', { name: 'SurvMod' })
  survMod!: boolean;

  @Column('bit', { name: 'CanPchOutWOpenChks' })
  canPchOutWOpenChks!: boolean;

  @Column('bit', { name: 'CMCanEditCC' })
  cmCanEditCc!: boolean;

  @Column('bit', { name: 'BRRpt' })
  brRpt!: boolean;

  @Column('bit', { name: 'SWARpt' })
  swaRpt!: boolean;

  @Column('bit', { name: 'ZoneMnt' })
  zoneMnt!: boolean;

  @Column('bit', { name: 'CustCanEditFD' })
  custCanEditFd!: boolean;

  @Column('bit', { name: 'CCMaint' })
  ccMaint!: boolean;

  @Column('bit', { name: 'FoodCostRpt' })
  foodCostRpt!: boolean;

  @Column('bit', { name: 'CustCanEditUserData' })
  custCanEditUserData!: boolean;

  @Column('bit', { name: 'IMCanDelete' })
  imCanDelete!: boolean;

  @Column('bit', { name: 'EJRptCanViewCCs' })
  ejRptCanViewCCs!: boolean;

  @Column('bit', { name: 'ChangeSaleNum' })
  changeSaleNum!: boolean;

  @Column('bit', { name: 'CreateNetSetDsk' })
  createNetSetDsk!: boolean;

  @Column('bit', { name: 'EMPCanChgBOPass' })
  empCanChgBoPass!: boolean;

  @Column('bit', { name: 'ResetDBs' })
  resetDBs!: boolean;

  @Column('bit', { name: 'CanResetActFile' })
  canResetActFile!: boolean;

  @Column('bit', { name: 'SystemDevices' })
  systemDevices!: boolean;

  @Column('bit', { name: 'SystemSettings' })
  systemSettings!: boolean;

  @Column('bit', { name: 'CCAMCanVwCCNums' })
  ccamCanVwCcNums!: boolean;

  @Column('bit', { name: 'RCSlsRpt' })
  rcSlsRpt!: boolean;

  @Column('bit', { name: 'LVSGraph' })
  lvsGraph!: boolean;

  @Column('bit', { name: 'SBRGraph' })
  sbrGraph!: boolean;

  @Column('bit', { name: 'InclCashTips' })
  inclCashTips!: boolean;

  @Column('bit', { name: 'PrtSvrRpt' })
  prtSvrRpt!: boolean;

  @Column('bit', { name: 'StartTimeOpt' })
  startTimeOpt!: boolean;

  @Column('int', { name: 'RptStTime' })
  rptStTime!: number;

  @Column('bit', { name: 'ShowDetail' })
  showDetail!: boolean;

  @Column('bit', { name: 'DetailFmt' })
  detailFmt!: boolean;

  @Column('bit', { name: 'InclCashTipsInAdjCash' })
  inclCashTipsInAdjCash!: boolean;

  @Column('bit', { name: 'InclCashGratsInAdjCash' })
  inclCashGratsInAdjCash!: boolean;

  @Column('bit', { name: 'EmpInclPdOuts' })
  empInclPdOuts!: boolean;

  @Column('bit', { name: 'EmpInclROAs' })
  empInclRoAs!: boolean;

  @Column('bit', { name: 'EmpNoAdjCash' })
  empNoAdjCash!: boolean;

  @Column('bit', { name: 'NoTipsOnTogo' })
  noTipsOnTogo!: boolean;

  @Column('bit', { name: 'ISRpt', default: () => '(0)' })
  isRpt!: boolean;

  @Column('int', { name: 'SettleResponsibility', default: () => '(0)' })
  settleResponsibility!: number;

  @Column('bit', { name: 'EditDashboards', default: () => '(0)' })
  editDashboards!: boolean;

  @Column('bit', { name: 'AddDashPanel', default: () => '(0)' })
  addDashPanel!: boolean;

  @Column('bit', { name: 'EditFavorites', default: () => '(0)' })
  editFavorites!: boolean;

  @Column('bit', { name: 'LogRpt', default: () => '(0)' })
  logRpt!: boolean;

  @Column('binary', { name: 'AssignClasses', length: 13, default: () => '(0)' })
  assignClasses!: Buffer;

  @Column('bit', { name: 'BrkMnt', default: () => '(0)' })
  brkMnt!: boolean;

  @Column('bit', { name: 'AdDriverMnt', default: () => '(0)' })
  adDriverMnt!: boolean;

  @Column('bit', { name: 'SPRPT', default: () => '(0)' })
  sprpt!: boolean;

  @Column('bit', { name: 'CanClearBatch', default: () => '(0)' })
  canClearBatch!: boolean;

  @Column('bit', { name: 'DBSetup', default: () => '(0)' })
  dbSetup!: boolean;

  @Column('bit', { name: 'LicenseFuturePOS', default: () => '(0)' })
  licenseFuturePos!: boolean;

  @Column('bit', { name: 'CustMntViewCCNum', default: () => '(0)' })
  custMntViewCcNum!: boolean;

  @Column('bit', { name: 'TmdMnuMnt', default: () => '(0)' })
  tmdMnuMnt!: boolean;

  @Column('bit', { name: 'CustChrgRpt', default: () => '(0)' })
  custChrgRpt!: boolean;

  @Column('bit', { name: 'WSImprt', default: () => '(0)' })
  wsImprt!: boolean;

  @Column('bit', { name: 'WSExprt', default: () => '(0)' })
  wsExprt!: boolean;

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

  @Column('bit', { name: 'UseCustomSemiMonthly', default: () => '(0)' })
  useCustomSemiMonthly!: boolean;

  @Column('int', { name: 'SemiMonthlyStart1', default: () => '(0)' })
  semiMonthlyStart1!: number;

  @Column('int', { name: 'SemiMonthlyStart2', default: () => '(0)' })
  semiMonthlyStart2!: number;

  @Column('bit', { name: 'AlertMnt', default: () => '(0)' })
  alertMnt!: boolean;

  @Column('bit', { name: 'DistributorReport', default: () => '(0)' })
  distributorReport!: boolean;

  @Column('bit', { name: 'DistributorMnt', default: () => '(0)' })
  distributorMnt!: boolean;

  @Column('bit', { name: 'Accardis', default: () => '(1)' })
  accardis!: boolean;

  @Column('bit', { name: 'AdDriver', default: () => '(1)' })
  adDriver!: boolean;

  @Column('bit', { name: 'ADPPayroll', default: () => '(1)' })
  adpPayroll!: boolean;

  @Column('bit', { name: 'APSPayroll', default: () => '(1)' })
  apsPayroll!: boolean;

  @Column('bit', { name: 'CallerId', default: () => '(1)' })
  callerId!: boolean;

  @Column('bit', { name: 'CallerIdCom', default: () => '(1)' })
  callerIdCom!: boolean;

  @Column('bit', { name: 'CBSPayroll', default: () => '(1)' })
  cbsPayroll!: boolean;

  @Column('bit', { name: 'ChefTec', default: () => '(1)' })
  chefTec!: boolean;

  @Column('bit', { name: 'CostGuard', default: () => '(1)' })
  costGuard!: boolean;

  @Column('bit', { name: 'CreditCardModule', default: () => '(1)' })
  creditCardModule!: boolean;

  @Column('bit', { name: 'DataTranCCAM', default: () => '(1)' })
  dataTranCcam!: boolean;

  @Column('bit', { name: 'DeductIT', default: () => '(1)' })
  deductIt!: boolean;

  @Column('bit', { name: 'FoodTrak', default: () => '(1)' })
  foodTrak!: boolean;

  @Column('bit', { name: 'GreatPlainsGL', default: () => '(1)' })
  greatPlainsGl!: boolean;

  @Column('bit', { name: 'GreatPlainsPayroll', default: () => '(1)' })
  greatPlainsPayroll!: boolean;

  @Column('bit', { name: 'HarmonyVDUDriver', default: () => '(0)' })
  harmonyVduDriver!: boolean;

  @Column('bit', { name: 'HeartlandPayroll', default: () => '(1)' })
  heartlandPayroll!: boolean;

  @Column('bit', { name: 'InternetCCAM', default: () => '(1)' })
  internetCcam!: boolean;

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

  @Column('bit', { name: 'QsrVduDriver', default: () => '(0)' })
  qsrVduDriver!: boolean;

  @Column('bit', { name: 'QuickbooksGL', default: () => '(1)' })
  quickbooksGl!: boolean;

  @Column('bit', { name: 'QuickBooksPayroll', default: () => '(1)' })
  quickBooksPayroll!: boolean;

  @Column('bit', { name: 'SaaShrPayroll', default: () => '(1)' })
  saaShrPayroll!: boolean;

  @Column('bit', { name: 'ScoreboardDriver', default: () => '(1)' })
  scoreboardDriver!: boolean;

  @Column('bit', { name: 'SecVduDriver', default: () => '(0)' })
  secVduDriver!: boolean;

  @Column('bit', { name: 'TabbedOut', default: () => '(0)' })
  tabbedOut!: boolean;

  @Column('bit', { name: 'TalonVideo', default: () => '(0)' })
  talonVideo!: boolean;

  @Column('bit', { name: 'VduDriver', default: () => '(1)' })
  vduDriver!: boolean;

  @Column('bit', { name: 'X10Driver', default: () => '(1)' })
  x10Driver!: boolean;

  @Column('bit', { name: 'AbraPayroll', default: () => '(1)' })
  abraPayroll!: boolean;

  @Column('bit', { name: 'EnterpriseBulkUploader', default: () => '(0)' })
  enterpriseBulkUploader!: boolean;

  @Column('bit', { name: 'ConvertExportPNG', default: () => '(0)' })
  convertExportPng!: boolean;

  @Column('bit', { name: 'ServerAppMonitor', default: () => '(0)' })
  serverAppMonitor!: boolean;

  @Column('bit', { name: 'SetSvrNm', default: () => '(0)' })
  setSvrNm!: boolean;

  @Column('bit', { name: 'SvcMgr', default: () => '(0)' })
  svcMgr!: boolean;

  @Column('bit', { name: 'WinSched', default: () => '(0)' })
  winSched!: boolean;

  @Column('bit', { name: 'PurgeOldData', default: () => '(1)' })
  purgeOldData!: boolean;

  @Column('bit', { name: 'DinePointDump', default: () => '(0)' })
  dinePointDump!: boolean;

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

  @Column('bit', { name: 'CustMntViewLoyalty', default: () => '(0)' })
  custMntViewLoyalty!: boolean;

  @Column('bit', { name: 'Mas90EmployeeWage', default: () => '(0)' })
  mas90EmployeeWage!: boolean;

  @Column('bit', { name: 'InventoryList', default: () => '(0)' })
  inventoryList!: boolean;

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

  @Column('bit', { name: 'SalesPerformance', default: () => '(0)' })
  salesPerformance!: boolean;

  @Column('bit', { name: 'ItemSales', default: () => '(0)' })
  itemSales!: boolean;

  @Column('bit', { name: 'XMLExport', default: () => '(0)' })
  xmlExport!: boolean;

  @Column('bit', { name: 'DataGroupMaintenance', default: () => '(0)' })
  dataGroupMaintenance!: boolean;

  @Column('bit', { name: 'FE_AuthMobilePOS', default: () => '(0)' })
  feAuthMobilePos!: boolean;

  @Column('bit', { name: 'MobilePOSServiceHost', default: () => '(0)' })
  mobilePosServiceHost!: boolean;

  @Column('bit', { name: 'HotSchedulesExport', default: () => '(0)' })
  hotSchedulesExport!: boolean;

  @Column('bit', { name: 'HotSchedulesImport', default: () => '(0)' })
  hotSchedulesImport!: boolean;

  @Column('bit', { name: 'ItemSize', default: () => '(0)' })
  itemSize!: boolean;

  @Column('bit', { name: 'ItemSizeDelete', default: () => '(0)' })
  itemSizeDelete!: boolean;

  @Column('smallint', { name: 'PayType', default: () => '(0)' })
  payType!: number;

  @Column('bit', { name: 'CanViewAutoReport', default: () => '(1)' })
  canViewAutoReport!: boolean;

  @Column('text', { name: 'ClassSecurity', nullable: true })
  classSecurity!: string | null;

  @Column('bit', { name: 'SkinManager', default: () => '(0)' })
  skinManager!: boolean;

  @Column('bit', { name: 'MediaBreakdownCountByMedia', default: () => '(0)' })
  mediaBreakdownCountByMedia!: boolean;

  @Column('bit', { name: 'ShowCreditDetail', default: () => '(0)' })
  showCreditDetail!: boolean;

  @Column('bit', { name: 'ResourceManager', default: () => '(0)' })
  resourceManager!: boolean;

  @Column('bit', { name: 'WebMenuMaintenance', default: () => '(0)' })
  webMenuMaintenance!: boolean;

  @Column('bit', { name: 'PaycomExport', default: () => '(0)' })
  paycomExport!: boolean;

  @Column('bit', { name: 'PaycomImport', default: () => '(0)' })
  paycomImport!: boolean;

  @Column('bit', { name: 'ImageImport', default: () => '(0)' })
  imageImport!: boolean;

  @Column('uniqueidentifier', { name: 'LaborGroupID', nullable: true })
  laborGroupId!: string | null;
}
