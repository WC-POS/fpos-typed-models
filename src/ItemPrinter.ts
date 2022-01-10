import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('IX_ItemPrinter', ['itemId'], {})
@Index('PK_ItemReceipt', ['itemPrinterId'], { unique: true })
@Entity('ItemPrinter', { schema: 'dbo' })
export class ItemPrinter {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemPrinterID',
    default: () => 'newsequentialid()',
  })
  itemPrinterId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('int', { name: 'PrinterIndex' })
  printerIndex!: number;

  @Column('nvarchar', {
    name: 'ReceiptDescription',
    nullable: true,
    length: 20,
  })
  receiptDescription!: string | null;

  @ManyToOne(() => Item, (item) => item.itemPrinters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
