import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer';

@Index('IX_CustomerLastOrder', ['customerId'], {})
@Index('PK_CustomerLastOrder', ['customerOrderId'], { unique: true })
@Entity('CustomerLastOrder', { schema: 'dbo' })
export class CustomerLastOrder {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerOrderID',
    default: () => 'newsequentialid()',
  })
  customerOrderId!: string;

  @Column('uniqueidentifier', { name: 'CustomerID', nullable: true })
  customerId!: string | null;

  @Column('int', { name: 'OrderIndex' })
  orderIndex!: number;

  @Column('datetime', { name: 'OrderDate', nullable: true })
  orderDate!: Date | null;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('datetime', { name: 'SettleDate', nullable: true })
  settleDate!: Date | null;

  @ManyToOne(() => Customer, (customer) => customer.customerLastOrders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CustomerID', referencedColumnName: 'customerId' }])
  customer!: Customer;
}
