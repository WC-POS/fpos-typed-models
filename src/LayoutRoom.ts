import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Layout } from './Layout';

@Index('IX_LayoutRoom', ['layoutId'], {})
@Index('PK_TableRoom', ['layoutRoomId'], { unique: true })
@Entity('LayoutRoom', { schema: 'dbo' })
export class LayoutRoom {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LayoutRoomID',
    default: () => 'newsequentialid()',
  })
  layoutRoomId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'RoomIndex' })
  roomIndex!: number;

  @Column('nvarchar', { name: 'RoomName', length: 20 })
  roomName!: string;

  @Column('nvarchar', { name: 'ImageFile', length: 128 })
  imageFile!: string;

  @Column('smallint', { name: 'PriceLevel' })
  priceLevel!: number;

  @ManyToOne(() => Layout, (layout) => layout.layoutRooms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'LayoutID', referencedColumnName: 'layoutId' }])
  layout!: Layout;
}
