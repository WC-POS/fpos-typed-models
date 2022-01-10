import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { SaleItem } from './SaleItem';

@Index('IX_SaleItemDiscount', ['saleItemId'], {})
@Index('PK_SaleItemDiscount', ['saleItemDiscountId'], { unique: true })
@Entity('SaleItemDiscount', { schema: 'dbo' })
export class SaleItemDiscount {
  @Column('uniqueidentifier', { primary: true, name: 'SaleItemDiscountID' })
  saleItemDiscountId!: string;

  @Column('uniqueidentifier', { name: 'SaleItemID' })
  saleItemId!: string;

  @Column('smallint', { name: 'ItemIndex' })
  itemIndex!: number;

  @Column('int', { name: 'DiscountIndex' })
  discountIndex!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @Column('int', { name: 'ApprovedByEmpID', default: () => '(0)' })
  approvedByEmpId!: number;

  @ManyToOne(() => SaleItem, (saleItem) => saleItem.saleItemDiscounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleItemID', referencedColumnName: 'saleItemId' }])
  saleItem!: SaleItem;
}
