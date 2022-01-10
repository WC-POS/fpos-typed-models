import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ReceiptFormatItem } from './ReceiptFormatItem';

@Index('PK_ReceiptFormat', ['receiptFormatId'], { unique: true })
@Entity('ReceiptFormat', { schema: 'dbo' })
export class ReceiptFormat {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReceiptFormatID',
    default: () => 'newsequentialid()',
  })
  receiptFormatId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;

  @Column('int', { name: 'ReceiptType', default: () => '(0)' })
  receiptType!: number;

  @OneToMany(
    () => ReceiptFormatItem,
    (receiptFormatItem) => receiptFormatItem.receiptFormat
  )
  receiptFormatItems!: ReceiptFormatItem[];
}
