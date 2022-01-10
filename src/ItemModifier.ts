import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('IX_ItemModifier', ['itemId'], {})
@Index('PK_ItemModifier', ['itemModifierId'], { unique: true })
@Entity('ItemModifier', { schema: 'dbo' })
export class ItemModifier {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemModifierID',
    default: () => 'newsequentialid()',
  })
  itemModifierId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('int', { name: 'ModifierIndex', default: () => '(0)' })
  modifierIndex!: number;

  @Column('nvarchar', { name: 'ModifierName', length: 33 })
  modifierName!: string;

  @Column('bit', { name: 'IsSelected' })
  isSelected!: boolean;

  @Column('bit', { name: 'IsWildcard', default: () => '(0)' })
  isWildcard!: boolean;

  @ManyToOne(() => Item, (item) => item.itemModifiers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
