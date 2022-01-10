import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GiftSeries } from './GiftSeries';

@Index('IX_GiftSeriesObject', ['giftSeriesId'], {})
@Index('PK_GiftSeriesObject', ['giftSeriesObjectId'], { unique: true })
@Entity('GiftSeriesObject', { schema: 'dbo' })
export class GiftSeriesObject {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftSeriesObjectID',
    default: () => 'newsequentialid()',
  })
  giftSeriesObjectId!: string;

  @Column('uniqueidentifier', { name: 'GiftSeriesID' })
  giftSeriesId!: string;

  @Column('int', { name: 'ObjectIndex' })
  objectIndex!: number;

  @Column('smallint', { name: 'ObjectType' })
  objectType!: number;

  @Column('smallint', { name: 'X' })
  x!: number;

  @Column('smallint', { name: 'Y' })
  y!: number;

  @Column('smallint', { name: 'Width' })
  width!: number;

  @Column('smallint', { name: 'Height' })
  height!: number;

  @Column('nvarchar', { name: 'Data', nullable: true, length: 80 })
  data!: string | null;

  @Column('tinyint', { name: 'TextType' })
  textType!: number;

  @Column('smallint', { name: 'TextJustification' })
  textJustification!: number;

  @Column('nvarchar', { name: 'FontName', nullable: true, length: 30 })
  fontName!: string | null;

  @Column('smallint', { name: 'FontStyle' })
  fontStyle!: number;

  @Column('tinyint', { name: 'TextColor' })
  textColor!: number;

  @ManyToOne(() => GiftSeries, (giftSeries) => giftSeries.giftSeriesObjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'GiftSeriesID', referencedColumnName: 'giftSeriesId' }])
  giftSeries!: GiftSeries;
}
