import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('IX_ItemIngredient', ['itemId'], {})
@Index('PK_ItemIngredient', ['itemIngredientId'], { unique: true })
@Entity('ItemIngredient', { schema: 'dbo' })
export class ItemIngredient {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemIngredientID',
    default: () => 'newsequentialid()',
  })
  itemIngredientId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('nvarchar', { name: 'IngredientName', length: 33 })
  ingredientName!: string;

  @Column('int', { name: 'IngredientIndex', default: () => '(0)' })
  ingredientIndex!: number;

  @Column('int', { name: 'UnitCount', default: () => '(0)' })
  unitCount!: number;

  @ManyToOne(() => Item, (item) => item.itemIngredients, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
