import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('PK_ScreenAd', ['screenAdId'], { unique: true })
@Entity('ScreenAd', { schema: 'dbo' })
export class ScreenAd {
  @Column('uniqueidentifier', { primary: true, name: 'ScreenAdID' })
  screenAdId!: string;

  @Column('int', { name: 'ScreenAdIndex', default: () => '(0)' })
  screenAdIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('int', { name: 'Duration', default: () => '(0)' })
  duration!: number;

  @Column('int', { name: 'Stretch', default: () => '(0)' })
  stretch!: number;

  @Column('int', { name: 'Transition', default: () => '(0)' })
  transition!: number;

  @Column('nvarchar', { name: 'Location', nullable: true, length: 260 })
  location!: string | null;

  @ManyToOne(() => Screen, (screen) => screen.screenAds)
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
