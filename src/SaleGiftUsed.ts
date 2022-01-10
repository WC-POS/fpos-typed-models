import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleGiftUsed', ['saleId'], {})
@Index('PK_EJGiftCertUsed', ['saleGiftUsedId'], { unique: true })
@Entity('SaleGiftUsed', { schema: 'dbo' })
export class SaleGiftUsed {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleGiftUsedID',
    default: () => 'newsequentialid()',
  })
  saleGiftUsedId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'GiftUsedIndex' })
  giftUsedIndex!: number;

  @Column('int', { name: 'SeriesIndex' })
  seriesIndex!: number;

  @Column('tinyint', { name: 'PartialOpts' })
  partialOpts!: number;

  @Column('tinyint', { name: 'GCPrtOpt' })
  gcPrtOpt!: number;

  @Column('tinyint', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('nvarchar', { name: 'GiftNumber', nullable: true, length: 16 })
  giftNumber!: string | null;

  @Column('int', { name: 'AmountRedeemed' })
  amountRedeemed!: number;

  @Column('int', { name: 'ChangeDue' })
  changeDue!: number;

  @Column('int', { name: 'Balance', default: () => '(0)' })
  balance!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleGiftUseds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
