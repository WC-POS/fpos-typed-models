import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenBanner', ['screenId'], {})
@Index('PK_ScreenBanner', ['screenBannerId'], { unique: true })
@Entity('ScreenBanner', { schema: 'dbo' })
export class ScreenBanner {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenBannerID',
    default: () => 'newsequentialid()',
  })
  screenBannerId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenBannerIndex', default: () => '(0)' })
  screenBannerIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenBanners, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
