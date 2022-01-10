import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdScoreLayout', ['designId'], { unique: true })
@Entity('AdScoreLayout', { schema: 'dbo' })
export class AdScoreLayout {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DesignID',
    default: () => 'newsequentialid()',
  })
  designId!: string;

  @Column('int', { name: 'DisplayNumber' })
  displayNumber!: number;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('nvarchar', { name: 'BackgroundColor', length: 10 })
  backgroundColor!: string;

  @Column('int', { name: 'WidthPercent' })
  widthPercent!: number;

  @Column('nvarchar', { name: 'LeftColumnHeader', length: 50 })
  leftColumnHeader!: string;

  @Column('nvarchar', { name: 'RightColumnHeader', length: 50 })
  rightColumnHeader!: string;

  @Column('nvarchar', { name: 'FontColor', length: 10 })
  fontColor!: string;

  @Column('int', { name: 'TopPadding' })
  topPadding!: number;

  @Column('nvarchar', { name: 'EvenRowBackgroundColor', length: 10 })
  evenRowBackgroundColor!: string;

  @Column('nvarchar', { name: 'OddRowBackgroundColor', length: 10 })
  oddRowBackgroundColor!: string;

  @Column('nvarchar', { name: 'EvenRowFontColor', length: 10 })
  evenRowFontColor!: string;

  @Column('nvarchar', { name: 'OddRowFontColor', length: 10 })
  oddRowFontColor!: string;

  @Column('nvarchar', { name: 'HeaderLineColor', length: 10 })
  headerLineColor!: string;

  @Column('int', { name: 'HeaderLineHeight' })
  headerLineHeight!: number;

  @Column('nvarchar', { name: 'TotalLineColor', length: 10 })
  totalLineColor!: string;

  @Column('int', { name: 'TotalLineHeight', default: () => '(0)' })
  totalLineHeight!: number;

  @Column('nvarchar', { name: 'StageColor', length: 10, default: () => "''" })
  stageColor!: string;

  @Column('nvarchar', { name: 'TotalColumnHeaderText', length: 50 })
  totalColumnHeaderText!: string;

  @Column('bit', { name: 'DrawModifiers', default: () => "'False'" })
  drawModifiers!: boolean;

  @Column('uniqueidentifier', {
    name: 'TemplateItemID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  templateItemId!: string;

  @Column('int', { name: 'HeightPercent', default: () => '(0)' })
  heightPercent!: number;

  @Column('int', { name: 'TableBorder', default: () => '(0)' })
  tableBorder!: number;

  @Column('nvarchar', { name: 'FontFamily', length: 50, default: () => "''" })
  fontFamily!: string;

  @Column('bit', { name: 'FontWeight', default: () => "'False'" })
  fontWeight!: boolean;

  @Column('int', { name: 'FontSize', default: () => '(0)' })
  fontSize!: number;
}
