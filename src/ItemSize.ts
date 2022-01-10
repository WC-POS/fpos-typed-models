import { Column, Entity, Index } from 'typeorm';

@Index('PK_ItemSize', ['itemSizeId'], { unique: true })
@Entity('ItemSize', { schema: 'dbo' })
export class ItemSize {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemSizeID',
    default: () => 'newsequentialid()',
  })
  itemSizeId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'Description', length: 6, default: () => "''" })
  description!: string;

  @Column('nvarchar', {
    name: 'ItemDescriptionPrefix',
    length: 6,
    default: () => "''",
  })
  itemDescriptionPrefix!: string;

  @Column('nvarchar', {
    name: 'ReceiptDescriptionPrefix',
    length: 6,
    default: () => "''",
  })
  receiptDescriptionPrefix!: string;
}
