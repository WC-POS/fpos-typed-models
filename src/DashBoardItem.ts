import { Column, Entity, Index } from 'typeorm';

@Index('PK_DashBoardItem_1', ['dashBoardItemId'], { unique: true })
@Entity('DashBoardItem', { schema: 'dbo' })
export class DashBoardItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DashBoardItemID',
    default: () => 'newsequentialid()',
  })
  dashBoardItemId!: string;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('uniqueidentifier', { name: 'DasboardItemType' })
  dasboardItemType!: string;

  @Column('nvarchar', { name: 'DasboardItemName', length: 150 })
  dasboardItemName!: string;

  @Column('int', { name: 'RefreshInterval' })
  refreshInterval!: number;

  @Column('uniqueidentifier', { name: 'DockingCellID' })
  dockingCellId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
