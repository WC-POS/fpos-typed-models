import { Column, Entity, Index, OneToMany } from 'typeorm';
import { LayoutGraphic } from './LayoutGraphic';
import { LayoutRoom } from './LayoutRoom';
import { LayoutSection } from './LayoutSection';
import { LayoutTable } from './LayoutTable';
import { LayoutText } from './LayoutText';

@Index('PK_Table', ['layoutId'], { unique: true })
@Entity('Layout', { schema: 'dbo' })
export class Layout {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutID',
    default: () => 'newsequentialid()',
  })
  layoutId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'TableCount' })
  tableCount!: number;

  @Column('smallint', { name: 'ColorStyle' })
  colorStyle!: number;

  @Column('bit', { name: 'NeedCleaned' })
  needCleaned!: boolean;

  @Column('smallint', { name: 'State1ColorIndex' })
  state1ColorIndex!: number;

  @Column('smallint', { name: 'State2ColorIndex' })
  state2ColorIndex!: number;

  @Column('smallint', { name: 'State3ColorIndex' })
  state3ColorIndex!: number;

  @Column('smallint', { name: 'State4ColorIndex' })
  state4ColorIndex!: number;

  @Column('smallint', { name: 'State5ColorIndex' })
  state5ColorIndex!: number;

  @Column('smallint', { name: 'State6ColorIndex' })
  state6ColorIndex!: number;

  @Column('datetime', { name: 'UpdateDate', nullable: true })
  updateDate!: Date | null;

  @OneToMany(() => LayoutGraphic, (layoutGraphic) => layoutGraphic.layout)
  layoutGraphics!: LayoutGraphic[];

  @OneToMany(() => LayoutRoom, (layoutRoom) => layoutRoom.layout)
  layoutRooms!: LayoutRoom[];

  @OneToMany(() => LayoutSection, (layoutSection) => layoutSection.layout)
  layoutSections!: LayoutSection[];

  @OneToMany(() => LayoutTable, (layoutTable) => layoutTable.layout)
  layoutTables!: LayoutTable[];

  @OneToMany(() => LayoutText, (layoutText) => layoutText.layout)
  layoutTexts!: LayoutText[];
}
