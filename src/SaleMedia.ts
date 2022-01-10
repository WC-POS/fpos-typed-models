import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('PK_SaleMedia', ['saleMediaId'], { unique: true })
@Entity('SaleMedia', { schema: 'dbo' })
export class SaleMedia {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleMediaID',
    default: () => 'newsequentialid()',
  })
  saleMediaId!: string;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleMedias, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
