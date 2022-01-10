import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Layout } from './Layout';

@Index('IX_LayoutTable', ['layoutId'], {})
@Index('PK_LayoutTable', ['layoutTableId'], { unique: true })
@Entity('LayoutTable', { schema: 'dbo' })
export class LayoutTable {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutTableID',
    default: () => 'newsequentialid()',
  })
  layoutTableId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'TableIndex' })
  tableIndex!: number;

  @Column('nvarchar', { name: 'TableName', length: 50 })
  tableName!: string;

  @Column('tinyint', { name: 'ShapeType' })
  shapeType!: number;

  @Column('smallint', { name: 'X' })
  x!: number;

  @Column('smallint', { name: 'Y' })
  y!: number;

  @Column('tinyint', { name: 'SeatCount' })
  seatCount!: number;

  @Column('int', { name: 'SectionIndex' })
  sectionIndex!: number;

  @Column('bit', { name: 'IsNonSmoking' })
  isNonSmoking!: boolean;

  @Column('int', { name: 'JoinTableIndex' })
  joinTableIndex!: number;

  @Column('bit', { name: 'IsX10Enabled' })
  isX10Enabled!: boolean;

  @Column('tinyint', { name: 'X10HouseCode' })
  x10HouseCode!: number;

  @Column('tinyint', { name: 'X10DeviceCode' })
  x10DeviceCode!: number;

  @Column('int', { name: 'RoomIndex', default: () => '(0)' })
  roomIndex!: number;

  @ManyToOne(() => Layout, (layout) => layout.layoutTables, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'LayoutID', referencedColumnName: 'layoutId' }])
  layout!: Layout;
}
