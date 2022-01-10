import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('IX_ItemMobileExclusion_EmpID', ['empId'], {})
@Index('IX_ItemMobileExclusion_ItemID', ['itemId'], {})
@Index('PK_ItemMobileExclusion', ['itemMobileExclusionId'], { unique: true })
@Entity('ItemMobileExclusion', { schema: 'dbo' })
export class ItemMobileExclusion {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemMobileExclusionID',
    default: () => 'newsequentialid()',
  })
  itemMobileExclusionId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('smallint', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @ManyToOne(() => Item, (item) => item.itemMobileExclusions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
