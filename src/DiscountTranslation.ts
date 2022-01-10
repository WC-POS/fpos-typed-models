import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Discount } from './Discount';

@Index('PK_DiscountTranslation', ['discountTranslationId'], { unique: true })
@Entity('DiscountTranslation', { schema: 'dbo' })
export class DiscountTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DiscountTranslationID',
    default: () => 'newsequentialid()',
  })
  discountTranslationId!: string;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Discount, (discount) => discount.discountTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'DiscountID', referencedColumnName: 'discountId' }])
  discount!: Discount;
}
