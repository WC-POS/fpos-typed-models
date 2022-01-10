import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Screen } from './Screen';
import { ScreenAutoMenuFilter } from './ScreenAutoMenuFilter';
import { ScreenAutoMenuNextButtonTextTranslation } from './ScreenAutoMenuNextButtonTextTranslation';
import { ScreenAutoMenuPagingButtonSettings } from './ScreenAutoMenuPagingButtonSettings';
import { ScreenAutoMenuPreviousButtonTextTranslation } from './ScreenAutoMenuPreviousButtonTextTranslation';

@Index('IX_ScreenAutoMenu', ['screenId'], {})
@Index('PK_ScreenAutoMenu', ['screenAutoMenuId'], { unique: true })
@Entity('ScreenAutoMenu', { schema: 'dbo' })
export class ScreenAutoMenu {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenAutoMenuID',
    default: () => 'newsequentialid()',
  })
  screenAutoMenuId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('nvarchar', {
    name: 'ScreenAutoMenuName',
    nullable: true,
    length: 40,
  })
  screenAutoMenuName!: string | null;

  @Column('int', { name: 'ScreenAutoMenuIndex', default: () => '(0)' })
  screenAutoMenuIndex!: number;

  @Column('smallint', { name: 'ButtonHorizontalSpacing', default: () => '(0)' })
  buttonHorizontalSpacing!: number;

  @Column('smallint', { name: 'ButtonVerticalSpacing', default: () => '(0)' })
  buttonVerticalSpacing!: number;

  @Column('tinyint', { name: 'PagingStyle', default: () => '(0)' })
  pagingStyle!: number;

  @Column('tinyint', { name: 'DepartmentStyle', default: () => '(0)' })
  departmentStyle!: number;

  @Column('bit', { name: 'GroupFilters', default: () => '(0)' })
  groupFilters!: boolean;

  @Column('nvarchar', {
    name: 'PreviousButtonText',
    nullable: true,
    length: 40,
  })
  previousButtonText!: string | null;

  @Column('nvarchar', { name: 'NextButtonText', nullable: true, length: 40 })
  nextButtonText!: string | null;

  @Column('nvarchar', { name: 'ItemTextSource', nullable: true, length: 40 })
  itemTextSource!: string | null;

  @Column('nvarchar', {
    name: 'DepartmentTextSource',
    nullable: true,
    length: 40,
  })
  departmentTextSource!: string | null;

  @Column('bit', { name: 'AllowItemGraphicOverride', nullable: true })
  allowItemGraphicOverride!: boolean | null;

  @Column('bit', { name: 'AutoSizeSpacingInEditor', nullable: true })
  autoSizeSpacingInEditor!: boolean | null;

  @Column('int', { name: 'MenuButtonHorizontalSpacing', default: () => '(0)' })
  menuButtonHorizontalSpacing!: number;

  @Column('int', { name: 'MenuButtonVerticalSpacing', default: () => '(0)' })
  menuButtonVerticalSpacing!: number;

  @Column('int', { name: 'MenuSeparation', default: () => '(0)' })
  menuSeparation!: number;

  @Column('decimal', {
    name: 'Opacity',
    precision: 2,
    scale: 1,
    default: () => '(1.0)',
  })
  opacity!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenAutoMenus, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;

  @OneToMany(
    () => ScreenAutoMenuFilter,
    (screenAutoMenuFilter) => screenAutoMenuFilter.screenAutoMenu
  )
  screenAutoMenuFilters!: ScreenAutoMenuFilter[];

  @OneToMany(
    () => ScreenAutoMenuNextButtonTextTranslation,
    (screenAutoMenuNextButtonTextTranslation) =>
      screenAutoMenuNextButtonTextTranslation.screenAutoMenu
  )
  screenAutoMenuNextButtonTextTranslations!: ScreenAutoMenuNextButtonTextTranslation[];

  @OneToMany(
    () => ScreenAutoMenuPagingButtonSettings,
    (screenAutoMenuPagingButtonSettings) =>
      screenAutoMenuPagingButtonSettings.screenAutoMenu
  )
  screenAutoMenuPagingButtonSettings!: ScreenAutoMenuPagingButtonSettings[];

  @OneToMany(
    () => ScreenAutoMenuPreviousButtonTextTranslation,
    (screenAutoMenuPreviousButtonTextTranslation) =>
      screenAutoMenuPreviousButtonTextTranslation.screenAutoMenu
  )
  screenAutoMenuPreviousButtonTextTranslations!: ScreenAutoMenuPreviousButtonTextTranslation[];
}
