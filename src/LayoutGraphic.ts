import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Layout } from './Layout';

@Index('IX_LayoutGraphic', ['layoutId'], {})
@Index('PK_TableImage', ['layoutGraphicId'], { unique: true })
@Entity('LayoutGraphic', { schema: 'dbo' })
export class LayoutGraphic {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutGraphicID',
    default: () => 'newsequentialid()',
  })
  layoutGraphicId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'GraphicIndex' })
  graphicIndex!: number;

  @Column('smallint', { name: 'RoomIndex' })
  roomIndex!: number;

  @ManyToOne(() => Layout, (layout) => layout.layoutGraphics, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'LayoutID', referencedColumnName: 'layoutId' }])
  layout!: Layout;
}
