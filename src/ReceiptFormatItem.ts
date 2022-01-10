import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ReceiptFormat } from './ReceiptFormat';

@Index('PK_ReceiptFormatItem', ['receiptFormatItemId'], { unique: true })
@Entity('ReceiptFormatItem', { schema: 'dbo' })
export class ReceiptFormatItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReceiptFormatItemID',
    default: () => 'newsequentialid()',
  })
  receiptFormatItemId!: string;

  @Column('nvarchar', { name: 'ReceiptName', length: 50 })
  receiptName!: string;

  @Column('nvarchar', { name: 'Format', nullable: true })
  format!: string | null;

  @ManyToOne(
    () => ReceiptFormat,
    (receiptFormat) => receiptFormat.receiptFormatItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ReceiptFormatID', referencedColumnName: 'receiptFormatId' },
  ])
  receiptFormat!: ReceiptFormat;
}
