import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('PK_CustomerRating', ['customerRatingId'], { unique: true })
@Entity('CustomerRating', { schema: 'dbo' })
export class CustomerRating {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerRatingID',
    default: () => 'newsequentialid()',
  })
  customerRatingId!: string;

  @Column('int', { name: 'CustomerNumber', default: () => '(0)' })
  customerNumber!: number;

  @Column('datetime', { name: 'CreatedDateUTC', default: () => 'getdate()' })
  createdDateUtc!: Date;

  @Column('smallint', { name: 'Rating', default: () => '(0)' })
  rating!: number;

  @Column('nvarchar', { name: 'Comment', nullable: true, length: 128 })
  comment!: string | null;

  @Column('uniqueidentifier', { name: 'SaleTenderID', nullable: true })
  saleTenderId!: string | null;

  @ManyToOne(() => Sale, (sale) => sale.customerRatings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
