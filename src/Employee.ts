import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ReportParameterValues } from './ReportParameterValues';
import { DashboardWidget } from './DashboardWidget';
import { EmployeeDrawer } from './EmployeeDrawer';
import { EmployeeRate } from './EmployeeRate';
import { MenuUsage } from './MenuUsage';

@Index('IX_Employee', ['empId', 'storeId'], { unique: true })
@Index('IX_Employee_Login', ['storeId', 'frontEndPassword'], {})
@Index('PK_Employee_1', ['employeeId'], { unique: true })
@Entity('Employee', { schema: 'dbo' })
export class Employee {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EmployeeID',
    default: () => 'newsequentialid()',
  })
  employeeId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'EmpID' })
  empId!: number;

  @Column('smallint', { name: 'OldPassword' })
  oldPassword!: number;

  @Column('smallint', { name: 'SecurityLevel' })
  securityLevel!: number;

  @Column('nvarchar', { name: 'Badge', nullable: true, length: 40 })
  badge!: string | null;

  @Column('nvarchar', { name: 'LastName', nullable: true, length: 20 })
  lastName!: string | null;

  @Column('nvarchar', { name: 'FirstName', nullable: true, length: 20 })
  firstName!: string | null;

  @Column('nchar', { name: 'MiddleInitial', nullable: true, length: 1 })
  middleInitial!: string | null;

  @Column('smallint', { name: 'Class' })
  class!: number;

  @Column('smallint', { name: 'PriceLevel' })
  priceLevel!: number;

  @Column('datetime', { name: 'BirthDate', nullable: true })
  birthDate!: Date | null;

  @Column('nvarchar', { name: 'UserInfo', nullable: true, length: 40 })
  userInfo!: string | null;

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

  @Column('nvarchar', { name: 'IceName', nullable: true, length: 20 })
  iceName!: string | null;

  @Column('nvarchar', { name: 'IcePhone', nullable: true, length: 16 })
  icePhone!: string | null;

  @Column('tinyint', { name: 'GSLFirstRoom' })
  gslFirstRoom!: number;

  @Column('tinyint', { name: 'GSLCurrRoom' })
  gslCurrRoom!: number;

  @Column('tinyint', { name: 'IsInactive' })
  isInactive!: number;

  @Column('smallint', { name: 'UpperLeftX' })
  upperLeftX!: number;

  @Column('smallint', { name: 'UpperLeftY' })
  upperLeftY!: number;

  @Column('tinyint', { name: 'WindowOrientation' })
  windowOrientation!: number;

  @Column('bit', { name: 'FingerprintRequiresId' })
  fingerprintRequiresId!: boolean;

  @Column('nvarchar', { name: 'Address', nullable: true, length: 64 })
  address!: string | null;

  @Column('varbinary', {
    name: 'FingerPrintData',
    nullable: true,
    length: 6000,
  })
  fingerPrintData!: Buffer | null;

  @Column('binary', { name: 'FrontEndPassword', nullable: true, length: 16 })
  frontEndPassword!: Buffer | null;

  @Column('binary', { name: 'BackOfficePassword1', nullable: true, length: 32 })
  backOfficePassword1!: Buffer | null;

  @Column('binary', { name: 'BackOfficePassword2', nullable: true, length: 32 })
  backOfficePassword2!: Buffer | null;

  @Column('binary', { name: 'BackOfficePassword3', nullable: true, length: 32 })
  backOfficePassword3!: Buffer | null;

  @Column('binary', { name: 'BackOfficePassword4', nullable: true, length: 32 })
  backOfficePassword4!: Buffer | null;

  @Column('datetime', { name: 'PasswordChanged', nullable: true })
  passwordChanged!: Date | null;

  @Column('tinyint', { name: 'BadPasswordCount' })
  badPasswordCount!: number;

  @Column('datetime', { name: 'LockedOut', nullable: true })
  lockedOut!: Date | null;

  @Column('bit', { name: 'NeedEncrypted', default: () => '(0)' })
  needEncrypted!: boolean;

  @Column('datetime', { name: 'LastBadPWDate', nullable: true })
  lastBadPwDate!: Date | null;

  @Column('bit', {
    name: 'RequireFingerprintForClockInOut',
    default: () => '(0)',
  })
  requireFingerprintForClockInOut!: boolean;

  @Column('nvarchar', { name: 'Email', nullable: true, length: 100 })
  email!: string | null;

  @Column('nvarchar', { name: 'CellPhone', nullable: true, length: 16 })
  cellPhone!: string | null;

  @Column('int', { name: 'CellProvider', default: () => '(0)' })
  cellProvider!: number;

  @Column('int', { name: 'AlertPreference', default: () => '(0)' })
  alertPreference!: number;

  @Column('bit', { name: 'IsClockInExempt', default: () => '(0)' })
  isClockInExempt!: boolean;

  @Column('binary', { name: 'Salt', nullable: true, length: 24 })
  salt!: Buffer | null;

  @Column('binary', { name: 'FrontEndHash', nullable: true, length: 32 })
  frontEndHash!: Buffer | null;

  @Column('binary', { name: 'BackOfficeHash1', nullable: true, length: 32 })
  backOfficeHash1!: Buffer | null;

  @Column('binary', { name: 'BackOfficeHash2', nullable: true, length: 32 })
  backOfficeHash2!: Buffer | null;

  @Column('binary', { name: 'BackOfficeHash3', nullable: true, length: 32 })
  backOfficeHash3!: Buffer | null;

  @Column('binary', { name: 'BackOfficeHash4', nullable: true, length: 32 })
  backOfficeHash4!: Buffer | null;

  @Column('datetime', { name: 'HireDate', nullable: true })
  hireDate!: Date | null;

  @Column('datetime', { name: 'ReviewDate', nullable: true })
  reviewDate!: Date | null;

  @Column('nvarchar', { name: 'Notes', nullable: true, length: 600 })
  notes!: string | null;

  @Column('int', { name: 'UserInviteStatus', nullable: true })
  userInviteStatus!: number | null;

  @Column('bit', { name: 'IsBackOfficeUser', default: () => '(0)' })
  isBackOfficeUser!: boolean;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('int', {
    name: 'CloudUserInviteStatus',
    nullable: true,
    default: () => '(0)',
  })
  cloudUserInviteStatus!: number | null;

  @Column('bit', { name: 'IsCloudUser', default: () => '(0)' })
  isCloudUser!: boolean;

  @OneToMany(
    () => ReportParameterValues,
    (reportParameterValues) => reportParameterValues.employee
  )
  reportParameterValues!: ReportParameterValues[];

  @OneToMany(
    () => DashboardWidget,
    (dashboardWidget) => dashboardWidget.employee
  )
  dashboardWidgets!: DashboardWidget[];

  @OneToMany(() => EmployeeDrawer, (employeeDrawer) => employeeDrawer.employee)
  employeeDrawers!: EmployeeDrawer[];

  @OneToMany(() => EmployeeRate, (employeeRate) => employeeRate.employee)
  employeeRates!: EmployeeRate[];

  @OneToMany(() => MenuUsage, (menuUsage) => menuUsage.employee)
  menuUsages!: MenuUsage[];
}
