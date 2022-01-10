import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Layout } from './Layout';

@Index('IX_LayoutText', ['layoutId'], {})
@Index('PK_LayoutText', ['layoutTextId'], { unique: true })
@Entity('LayoutText', { schema: 'dbo' })
export class LayoutText {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutTextID',
    default: () => 'newsequentialid()',
  })
  layoutTextId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'TextIndex', default: () => '(0)' })
  textIndex!: number;

  @Column('smallint', { name: 'Orientation' })
  orientation!: number;

  @Column('smallint', { name: 'X' })
  x!: number;

  @Column('smallint', { name: 'Y' })
  y!: number;

  @Column('smallint', { name: 'Width' })
  width!: number;

  @Column('smallint', { name: 'Height' })
  height!: number;

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

  @Column('smallint', { name: 'FontItalic' })
  fontItalic!: number;

  @Column('smallint', { name: 'FontUnderline' })
  fontUnderline!: number;

  @Column('smallint', { name: 'FontStrikeOut' })
  fontStrikeOut!: number;

  @Column('smallint', { name: 'FontCharset' })
  fontCharset!: number;

  @Column('smallint', { name: 'FontOutPrecision' })
  fontOutPrecision!: number;

  @Column('smallint', { name: 'FontClipPrecision' })
  fontClipPrecision!: number;

  @Column('smallint', { name: 'FontQuality' })
  fontQuality!: number;

  @Column('smallint', { name: 'FontPitchAndFamily' })
  fontPitchAndFamily!: number;

  @Column('nvarchar', { name: 'FontFaceName', length: 32 })
  fontFaceName!: string;

  @Column('int', { name: 'ForegroundColor' })
  foregroundColor!: number;

  @Column('int', { name: 'BackgroundColor' })
  backgroundColor!: number;

  @Column('int', { name: 'RoomIndex' })
  roomIndex!: number;

  @Column('nvarchar', { name: 'Text', nullable: true, length: 65 })
  text!: string | null;

  @ManyToOne(() => Layout, (layout) => layout.layoutTexts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'LayoutID', referencedColumnName: 'layoutId' }])
  layout!: Layout;
}
