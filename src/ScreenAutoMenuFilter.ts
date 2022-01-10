import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ScreenAutoMenu } from './ScreenAutoMenu';
import { ScreenAutoMenuFilterButtonSettings } from './ScreenAutoMenuFilterButtonSettings';

@Index('PK_ScreenAutoMenuFilter', ['screenAutoMenuFilterId'], { unique: true })
@Entity('ScreenAutoMenuFilter', { schema: 'dbo' })
export class ScreenAutoMenuFilter {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenAutoMenuFilterID',
    default: () => 'newsequentialid()',
  })
  screenAutoMenuFilterId!: string;

  @Column('tinyint', { name: 'Priority' })
  priority!: number;

  @Column('nvarchar', {
    name: 'DepartmentNameFilter',
    nullable: true,
    length: 10,
  })
  departmentNameFilter!: string | null;

  @Column('nvarchar', {
    name: 'DepartmentGroupFilter',
    nullable: true,
    length: 30,
  })
  departmentGroupFilter!: string | null;

  @Column('nvarchar', { name: 'ItemNameFilter', nullable: true, length: 32 })
  itemNameFilter!: string | null;

  @Column('nvarchar', { name: 'ItemUPCFilter', nullable: true, length: 32 })
  itemUpcFilter!: string | null;

  @Column('nvarchar', { name: 'MenuFilter', nullable: true, length: 20 })
  menuFilter!: string | null;

  @Column('bit', { name: 'ExcludeModifiers', nullable: true })
  excludeModifiers!: boolean | null;

  @Column('bit', { name: 'SortDirection', default: () => '(0)' })
  sortDirection!: boolean;

  @Column('nvarchar', { name: 'FilterMax', nullable: true, length: 32 })
  filterMax!: string | null;

  @Column('bit', { name: 'ShowAvailability', nullable: true })
  showAvailability!: boolean | null;

  @Column('bit', { name: 'ProcessItemBuffer', default: () => '(1)' })
  processItemBuffer!: boolean;

  @Column('bit', { name: 'ReplaceItemBuffer', default: () => '(1)' })
  replaceItemBuffer!: boolean;

  @Column('int', { name: 'Priority2', default: () => '(0)' })
  priority2!: number;

  @ManyToOne(
    () => ScreenAutoMenu,
    (screenAutoMenu) => screenAutoMenu.screenAutoMenuFilters,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenAutoMenuID', referencedColumnName: 'screenAutoMenuId' },
  ])
  screenAutoMenu!: ScreenAutoMenu;

  @OneToMany(
    () => ScreenAutoMenuFilterButtonSettings,
    (screenAutoMenuFilterButtonSettings) =>
      screenAutoMenuFilterButtonSettings.screenAutoMenuFilter
  )
  screenAutoMenuFilterButtonSettings!: ScreenAutoMenuFilterButtonSettings[];
}
