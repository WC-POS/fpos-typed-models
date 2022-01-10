import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('PK_ItemTranslation', ['itemTranslationId'], { unique: true })
@Entity('ItemTranslation', { schema: 'dbo' })
export class ItemTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemTranslationID',
    default: () => 'newsequentialid()',
  })
  itemTranslationId!: string;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Item, (item) => item.itemTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
