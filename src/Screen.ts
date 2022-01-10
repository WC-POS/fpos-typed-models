import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ScreenAd } from './ScreenAd';
import { ScreenAutoMenu } from './ScreenAutoMenu';
import { ScreenBanner } from './ScreenBanner';
import { ScreenBitmap } from './ScreenBitmap';
import { ScreenButton } from './ScreenButton';
import { ScreenEdit } from './ScreenEdit';
import { ScreenFrame } from './ScreenFrame';
import { ScreenHelp } from './ScreenHelp';
import { ScreenKioskMenu } from './ScreenKioskMenu';
import { ScreenList } from './ScreenList';
import { ScreenText } from './ScreenText';

@Index('IX_Screen', ['regionId', 'screenIndex'], {})
@Index('PK_Screen', ['screenId'], { unique: true })
@Entity('Screen', { schema: 'dbo' })
export class Screen {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenID',
    default: () => 'newsequentialid()',
  })
  screenId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'ScreenIndex' })
  screenIndex!: number;

  @Column('nvarchar', { name: 'ScreenName', length: 40 })
  screenName!: string;

  @Column('bit', { name: 'IsRequired', default: () => '(0)' })
  isRequired!: boolean;

  @Column('nvarchar', { name: 'BitmapFile', length: 50, default: () => "''" })
  bitmapFile!: string;

  @Column('int', { name: 'ScreenType', default: () => '(0)' })
  screenType!: number;

  @OneToMany(() => ScreenAd, (screenAd) => screenAd.screen)
  screenAds!: ScreenAd[];

  @OneToMany(() => ScreenAutoMenu, (screenAutoMenu) => screenAutoMenu.screen)
  screenAutoMenus!: ScreenAutoMenu[];

  @OneToMany(() => ScreenBanner, (screenBanner) => screenBanner.screen)
  screenBanners!: ScreenBanner[];

  @OneToMany(() => ScreenBitmap, (screenBitmap) => screenBitmap.screen)
  screenBitmaps!: ScreenBitmap[];

  @OneToMany(() => ScreenButton, (screenButton) => screenButton.screen)
  screenButtons!: ScreenButton[];

  @OneToMany(() => ScreenEdit, (screenEdit) => screenEdit.screen)
  screenEdits!: ScreenEdit[];

  @OneToMany(() => ScreenFrame, (screenFrame) => screenFrame.screen)
  screenFrames!: ScreenFrame[];

  @OneToMany(() => ScreenHelp, (screenHelp) => screenHelp.screen)
  screenHelps!: ScreenHelp[];

  @OneToMany(() => ScreenKioskMenu, (screenKioskMenu) => screenKioskMenu.screen)
  screenKioskMenus!: ScreenKioskMenu[];

  @OneToMany(() => ScreenList, (screenList) => screenList.screen)
  screenLists!: ScreenList[];

  @OneToMany(() => ScreenText, (screenText) => screenText.screen)
  screenTexts!: ScreenText[];
}
