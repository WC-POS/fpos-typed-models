import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenBitmap', ['screenId'], {})
@Index('PK_ScreenBitmap', ['screenBitmapId'], { unique: true })
@Entity('ScreenBitmap', { schema: 'dbo' })
export class ScreenBitmap {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenBitmapID',
    default: () => 'newsequentialid()',
  })
  screenBitmapId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenBitmapIndex', default: () => '(0)' })
  screenBitmapIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('nvarchar', { name: 'BitmapFile', nullable: true, length: 128 })
  bitmapFile!: string | null;

  @Column('smallint', { name: 'DisplayMethod', default: () => '(0)' })
  displayMethod!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenBitmaps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
