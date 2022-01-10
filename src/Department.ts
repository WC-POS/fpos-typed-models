import { Column, Entity, Index, OneToMany } from 'typeorm';
import { DepartmentMobileExclusion } from './DepartmentMobileExclusion';
import { DepartmentSchedule } from './DepartmentSchedule';
import { DepartmentTranslation } from './DepartmentTranslation';

@Index('IX_Department', ['regionId', 'departmentName'], {})
@Index('PK_Department', ['departmentId'], { unique: true })
@Entity('Department', { schema: 'dbo' })
export class Department {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DepartmentID',
    default: () => 'newsequentialid()',
  })
  departmentId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'DepartmentName', length: 10 })
  departmentName!: string;

  @Column('nvarchar', {
    name: 'DepartmentDescription',
    nullable: true,
    length: 30,
  })
  departmentDescription!: string | null;

  @Column('nvarchar', { name: 'GroupName', nullable: true, length: 30 })
  groupName!: string | null;

  @Column('bit', { name: 'IsHash', default: () => '(0)' })
  isHash!: boolean;

  @Column('tinyint', { name: 'PMSBucketNumber' })
  pmsBucketNumber!: number;

  @Column('bit', { name: 'IsUsedOnline', default: () => '(0)' })
  isUsedOnline!: boolean;

  @Column('nvarchar', { name: 'WebTitle', nullable: true, length: 30 })
  webTitle!: string | null;

  @Column('nvarchar', { name: 'WebDescription', nullable: true })
  webDescription!: string | null;

  @Column('nvarchar', { name: 'WebThumbPath', nullable: true, length: 254 })
  webThumbPath!: string | null;

  @Column('nvarchar', { name: 'WebImagePath', nullable: true, length: 254 })
  webImagePath!: string | null;

  @Column('bit', { name: 'IsDefault', default: () => '(0)' })
  isDefault!: boolean;

  @Column('int', { name: 'DisplayIndex', default: () => '(0)' })
  displayIndex!: number;

  @Column('bit', { name: 'IsParent', default: () => '(0)' })
  isParent!: boolean;

  @Column('uniqueidentifier', { name: 'ParentDepartmentID', nullable: true })
  parentDepartmentId!: string | null;

  @Column('int', { name: 'VDUID', default: () => '(0)' })
  vduid!: number;

  @Column('bit', { name: 'AskID', default: () => '(0)' })
  askId!: boolean;

  @Column('int', { name: 'QuantityMultiplier', default: () => '(0)' })
  quantityMultiplier!: number;

  @Column('bit', { name: 'MobileAskID', default: () => '(0)' })
  mobileAskId!: boolean;

  @Column('bit', { name: 'IsMobile', default: () => '(0)' })
  isMobile!: boolean;

  @Column('uniqueidentifier', { name: 'MobileMessageID', nullable: true })
  mobileMessageId!: string | null;

  @Column('nvarchar', {
    name: 'OverrideAutoMenuButtonSettingsGraphic',
    nullable: true,
    length: 50,
  })
  overrideAutoMenuButtonSettingsGraphic!: string | null;

  @Column('bit', { name: 'IsRequired', default: () => '(0)' })
  isRequired!: boolean;

  @Column('nvarchar', { name: 'ImageName', nullable: true, length: 20 })
  imageName!: string | null;

  @Column('bit', { name: 'AllowEBT', default: () => '(0)' })
  allowEbt!: boolean;

  @Column('bit', { name: 'HideSkyTab', default: () => '(0)' })
  hideSkyTab!: boolean;

  @OneToMany(
    () => DepartmentMobileExclusion,
    (departmentMobileExclusion) => departmentMobileExclusion.department
  )
  departmentMobileExclusions!: DepartmentMobileExclusion[];

  @OneToMany(
    () => DepartmentSchedule,
    (departmentSchedule) => departmentSchedule.department
  )
  departmentSchedules!: DepartmentSchedule[];

  @OneToMany(
    () => DepartmentTranslation,
    (departmentTranslation) => departmentTranslation.department
  )
  departmentTranslations!: DepartmentTranslation[];
}
