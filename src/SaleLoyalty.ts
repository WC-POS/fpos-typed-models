import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('PK_SaleLoyalty', ['saleLoyaltyId'], { unique: true })
@Entity('SaleLoyalty', { schema: 'dbo' })
export class SaleLoyalty {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleLoyaltyID',
    default: () => 'newsequentialid()',
  })
  saleLoyaltyId!: string;

  @Column('int', { name: 'LoyaltyIndex' })
  loyaltyIndex!: number;

  @Column('int', { name: 'CurrentCredits' })
  currentCredits!: number;

  @Column('nvarchar', { name: 'Rating', nullable: true, length: 50 })
  rating!: string | null;

  @Column('nvarchar', { name: 'CouponCode', length: 20, default: () => "''" })
  couponCode!: string;

  @Column('int', { name: 'Credits', default: () => '(0)' })
  credits!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleLoyalties, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
