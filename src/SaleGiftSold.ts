import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleGiftSold', ['saleId'], {})
@Index('PK_SaleGiftCardSold', ['saleGiftSoldId'], { unique: true })
@Entity('SaleGiftSold', { schema: 'dbo' })
export class SaleGiftSold {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleGiftSoldID',
    default: () => 'newsequentialid()',
  })
  saleGiftSoldId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'GiftSoldIndex' })
  giftSoldIndex!: number;

  @Column('tinyint', { name: 'IsTracked' })
  isTracked!: number;

  @Column('int', { name: 'SeriesIndex' })
  seriesIndex!: number;

  @Column('nchar', { name: 'GiftNumber', nullable: true, length: 16 })
  giftNumber!: string | null;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleGiftSolds, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
