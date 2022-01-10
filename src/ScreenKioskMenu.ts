import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Screen } from './Screen';
import { ScreenKioskMenuFilter } from './ScreenKioskMenuFilter';
import { ScreenKioskMenuNextButtonTextTranslation } from './ScreenKioskMenuNextButtonTextTranslation';
import { ScreenKioskMenuPreviousButtonTextTranslation } from './ScreenKioskMenuPreviousButtonTextTranslation';

@Index('IX_ScreenKioskMenu', ['screenId'], {})
@Index('PK_ScreenKioskMenu', ['screenKioskMenuId'], { unique: true })
@Entity('ScreenKioskMenu', { schema: 'dbo' })
export class ScreenKioskMenu {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenKioskMenuID',
    default: () => 'newsequentialid()',
  })
  screenKioskMenuId!: string;

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

  @Column('nvarchar', { name: 'KioskMenuName', nullable: true, length: 40 })
  kioskMenuName!: string | null;

  @Column('int', { name: 'KioskMenuIndex', default: () => '(0)' })
  kioskMenuIndex!: number;

  @Column('smallint', { name: 'ButtonHorizontalSpacing', default: () => '(0)' })
  buttonHorizontalSpacing!: number;

  @Column('smallint', { name: 'ButtonVerticalSpacing', default: () => '(0)' })
  buttonVerticalSpacing!: number;

  @Column('smallint', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('int', { name: 'ButtonWidth', default: () => '(0)' })
  buttonWidth!: number;

  @Column('int', { name: 'ButtonHeight', default: () => '(0)' })
  buttonHeight!: number;

  @Column('int', { name: 'PageDirectionHeight', default: () => '(0)' })
  pageDirectionHeight!: number;

  @Column('int', { name: 'PageDirectionWidth', default: () => '(0)' })
  pageDirectionWidth!: number;

  @Column('int', { name: 'PageHorizontalSpacing', default: () => '(0)' })
  pageHorizontalSpacing!: number;

  @Column('int', { name: 'PageVerticalSpacing', default: () => '(0)' })
  pageVerticalSpacing!: number;

  @Column('smallint', { name: 'PageNextDirection', default: () => '(0)' })
  pageNextDirection!: number;

  @Column('smallint', { name: 'PagePreviousDirection', default: () => '(0)' })
  pagePreviousDirection!: number;

  @Column('int', { name: 'PageSize', default: () => '(0)' })
  pageSize!: number;

  @Column('nvarchar', { name: 'PageNextImageName', nullable: true, length: 50 })
  pageNextImageName!: string | null;

  @Column('nvarchar', {
    name: 'PagePreviousImageName',
    nullable: true,
    length: 50,
  })
  pagePreviousImageName!: string | null;

  @Column('nvarchar', { name: 'PageNextText', nullable: true, length: 40 })
  pageNextText!: string | null;

  @Column('nvarchar', { name: 'PagePreviousText', nullable: true, length: 40 })
  pagePreviousText!: string | null;

  @Column('int', { name: 'GotoScreenIndex', default: () => '(-1)' })
  gotoScreenIndex!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenKioskMenus, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;

  @OneToMany(
    () => ScreenKioskMenuFilter,
    (screenKioskMenuFilter) => screenKioskMenuFilter.screenKioskMenu
  )
  screenKioskMenuFilters!: ScreenKioskMenuFilter[];

  @OneToMany(
    () => ScreenKioskMenuNextButtonTextTranslation,
    (screenKioskMenuNextButtonTextTranslation) =>
      screenKioskMenuNextButtonTextTranslation.screenKioskMenu
  )
  screenKioskMenuNextButtonTextTranslations!: ScreenKioskMenuNextButtonTextTranslation[];

  @OneToMany(
    () => ScreenKioskMenuPreviousButtonTextTranslation,
    (screenKioskMenuPreviousButtonTextTranslation) =>
      screenKioskMenuPreviousButtonTextTranslation.screenKioskMenu
  )
  screenKioskMenuPreviousButtonTextTranslations!: ScreenKioskMenuPreviousButtonTextTranslation[];
}
