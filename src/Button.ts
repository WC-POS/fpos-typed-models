import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ButtonTranslation } from './ButtonTranslation';

@Index('IX_Button', ['regionId', 'menu'], {})
@Index('PK_Button_1', ['buttonId'], { unique: true })
@Entity('Button', { schema: 'dbo' })
export class Button {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ButtonID',
    default: () => 'newsequentialid()',
  })
  buttonId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'ButtonName', length: 32 })
  buttonName!: string;

  @Column('nvarchar', { name: 'Menu', nullable: true, length: 20 })
  menu!: string | null;

  @Column('tinyint', { name: 'Position' })
  position!: number;

  @Column('tinyint', { name: 'Function' })
  function!: number;

  @Column('tinyint', { name: 'MinSecLevel' })
  minSecLevel!: number;

  @Column('bit', { name: 'AskForSupervisor' })
  askForSupervisor!: boolean;

  @Column('smallint', { name: 'Width' })
  width!: number;

  @Column('smallint', { name: 'Height' })
  height!: number;

  @Column('varbinary', { name: 'Data', nullable: true, length: 512 })
  data!: Buffer | null;

  @Column('nvarchar', { name: 'Text', nullable: true })
  text!: string | null;

  @Column('smallint', { name: 'FontHeight' })
  fontHeight!: number;

  @Column('smallint', { name: 'FontWidth' })
  fontWidth!: number;

  @Column('smallint', { name: 'FontEscapement' })
  fontEscapement!: number;

  @Column('smallint', { name: 'FontOrientation' })
  fontOrientation!: number;

  @Column('smallint', { name: 'FontWeight' })
  fontWeight!: number;

  @Column('tinyint', { name: 'FontItalic' })
  fontItalic!: number;

  @Column('tinyint', { name: 'FontUnderline' })
  fontUnderline!: number;

  @Column('tinyint', { name: 'FontStrikeOut' })
  fontStrikeOut!: number;

  @Column('tinyint', { name: 'FontCharSet' })
  fontCharSet!: number;

  @Column('tinyint', { name: 'FontOutPrecision' })
  fontOutPrecision!: number;

  @Column('tinyint', { name: 'FontClipPrecision' })
  fontClipPrecision!: number;

  @Column('tinyint', { name: 'FontQuality' })
  fontQuality!: number;

  @Column('tinyint', { name: 'FontPitchAndFamily' })
  fontPitchAndFamily!: number;

  @Column('nvarchar', { name: 'FontFaceName', nullable: true, length: 50 })
  fontFaceName!: string | null;

  @Column('int', { name: 'ForeGround' })
  foreGround!: number;

  @Column('int', { name: 'BackGround' })
  backGround!: number;

  @Column('tinyint', { name: 'ImageType' })
  imageType!: number;

  @Column('tinyint', { name: 'CtrOrTitle' })
  ctrOrTitle!: number;

  @Column('nvarchar', { name: 'GraphicName', nullable: true, length: 50 })
  graphicName!: string | null;

  @Column('tinyint', { name: 'NoBorder' })
  noBorder!: number;

  @Column('bit', { name: 'IsRequired', default: () => '(0)' })
  isRequired!: boolean;

  @Column('bit', { name: 'UseSkinColors', default: () => '(0)' })
  useSkinColors!: boolean;

  @Column('bit', { name: 'UseSkinGraphics', default: () => '(0)' })
  useSkinGraphics!: boolean;

  @Column('bit', { name: 'ShowSkinStylization', default: () => '(1)' })
  showSkinStylization!: boolean;

  @OneToMany(
    () => ButtonTranslation,
    (buttonTranslation) => buttonTranslation.button
  )
  buttonTranslations!: ButtonTranslation[];
}
