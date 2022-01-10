import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenKioskMenu } from './ScreenKioskMenu';

@Index('PK_ScreenKioskMenuFilter', ['screenKioskMenuFilterId'], {
  unique: true,
})
@Entity('ScreenKioskMenuFilter', { schema: 'dbo' })
export class ScreenKioskMenuFilter {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenKioskMenuFilterID',
    default: () => 'newsequentialid()',
  })
  screenKioskMenuFilterId!: string;

  @Column('int', { name: 'ScreenKioskMenuFilterIndex', default: () => '(0)' })
  screenKioskMenuFilterIndex!: number;

  @Column('smallint', { name: 'Type' })
  type!: number;

  @Column('nvarchar', { name: 'Filter', nullable: true, length: 50 })
  filter!: string | null;

  @Column('nvarchar', { name: 'FilterEnd', nullable: true, length: 50 })
  filterEnd!: string | null;

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

  @ManyToOne(
    () => ScreenKioskMenu,
    (screenKioskMenu) => screenKioskMenu.screenKioskMenuFilters,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenKioskMenuID', referencedColumnName: 'screenKioskMenuId' },
  ])
  screenKioskMenu!: ScreenKioskMenu;
}
