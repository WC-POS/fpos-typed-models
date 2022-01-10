import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer';

@Index('IX_CustomerPlan', ['customerId'], {})
@Index('PK_CustomerPlan_1', ['customerPlanId'], { unique: true })
@Entity('CustomerPlan', { schema: 'dbo' })
export class CustomerPlan {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerPlanID',
    default: () => 'newsequentialid()',
  })
  customerPlanId!: string;

  @Column('uniqueidentifier', { name: 'CustomerID' })
  customerId!: string;

  @Column('int', { name: 'PlanIndex' })
  planIndex!: number;

  @Column('int', { name: 'CurrentAmount' })
  currentAmount!: number;

  @Column('tinyint', { name: 'CurrentLevel' })
  currentLevel!: number;

  @Column('tinyint', { name: 'RepeatCount' })
  repeatCount!: number;

  @ManyToOne(() => Customer, (customer) => customer.customerPlans, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CustomerID', referencedColumnName: 'customerId' }])
  customer!: Customer;
}
