import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenAutoMenu } from './ScreenAutoMenu';

@Index(
  'PK_ScreenAutoMenuPagingButtonSettings',
  ['screenAutoMenuPagingButtonSettingsId'],
  { unique: true }
)
@Entity('ScreenAutoMenuPagingButtonSettings', { schema: 'dbo' })
export class ScreenAutoMenuPagingButtonSettings {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenAutoMenuPagingButtonSettingsID',
    default: () => 'newsequentialid()',
  })
  screenAutoMenuPagingButtonSettingsId!: string;

  @Column('tinyint', { name: 'Order', nullable: true })
  order!: number | null;

  @Column('tinyint', { name: 'MinSecLevel', nullable: true })
  minSecLevel!: number | null;

  @Column('bit', { name: 'AskForSupervisor', nullable: true })
  askForSupervisor!: boolean | null;

  @Column('tinyint', { name: 'ButtonTextSource', nullable: true })
  buttonTextSource!: number | null;

  @Column('bit', { name: 'ShowQuantityAvailable', nullable: true })
  showQuantityAvailable!: boolean | null;

  @Column('smallint', { name: 'Width', nullable: true })
  width!: number | null;

  @Column('smallint', { name: 'Height', nullable: true })
  height!: number | null;

  @Column('smallint', { name: 'FontHeight', nullable: true })
  fontHeight!: number | null;

  @Column('smallint', { name: 'FontWidth', nullable: true })
  fontWidth!: number | null;

  @Column('smallint', { name: 'FontEscapement', nullable: true })
  fontEscapement!: number | null;

  @Column('smallint', { name: 'FontOrientation', nullable: true })
  fontOrientation!: number | null;

  @Column('smallint', { name: 'FontWeight', nullable: true })
  fontWeight!: number | null;

  @Column('tinyint', { name: 'FontItalic', nullable: true })
  fontItalic!: number | null;

  @Column('tinyint', { name: 'FontUnderline', nullable: true })
  fontUnderline!: number | null;

  @Column('tinyint', { name: 'FontStrikeout', nullable: true })
  fontStrikeout!: number | null;

  @Column('tinyint', { name: 'FontCharSet', nullable: true })
  fontCharSet!: number | null;

  @Column('tinyint', { name: 'FontOutPrecision', nullable: true })
  fontOutPrecision!: number | null;

  @Column('tinyint', { name: 'FontClipPrecision', nullable: true })
  fontClipPrecision!: number | null;

  @Column('tinyint', { name: 'FontQuality', nullable: true })
  fontQuality!: number | null;

  @Column('tinyint', { name: 'FontPitchAndFamily', nullable: true })
  fontPitchAndFamily!: number | null;

  @Column('nvarchar', { name: 'FontFaceName', nullable: true, length: 50 })
  fontFaceName!: string | null;

  @Column('int', { name: 'ForeGround', nullable: true })
  foreGround!: number | null;

  @Column('int', { name: 'BackGround', nullable: true })
  backGround!: number | null;

  @Column('tinyint', { name: 'GraphicsPosition', nullable: true })
  graphicsPosition!: number | null;

  @Column('tinyint', { name: 'GraphicsTextAlignment', nullable: true })
  graphicsTextAlignment!: number | null;

  @Column('nvarchar', { name: 'GraphicName', nullable: true, length: 50 })
  graphicName!: string | null;

  @Column('tinyint', { name: 'Border3D', nullable: true })
  border3D!: number | null;

  @Column('tinyint', { name: 'UseSkinColors', nullable: true })
  useSkinColors!: number | null;

  @ManyToOne(
    () => ScreenAutoMenu,
    (screenAutoMenu) => screenAutoMenu.screenAutoMenuPagingButtonSettings,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenAutoMenuID', referencedColumnName: 'screenAutoMenuId' },
  ])
  screenAutoMenu!: ScreenAutoMenu;
}
