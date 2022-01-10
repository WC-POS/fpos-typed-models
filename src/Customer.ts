import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CustomerCard } from './CustomerCard';
import { CustomerLastOrder } from './CustomerLastOrder';
import { CustomerPlan } from './CustomerPlan';

@Index('IX_Customer', ['customerNumber', 'storeId'], { unique: true })
@Index('IX_Customer_1', ['userData', 'lastName', 'firstName'], {})
@Index('IX_Customer_Badge', ['badge'], {})
@Index('IX_Customer_Name', ['lastName', 'firstName'], {})
@Index('IX_Customer_Number', ['customerNumber'], {})
@Index('IX_Customer_Phone', ['phone', 'lastName', 'firstName'], {})
@Index('PK_Customer', ['customerId'], { unique: true })
@Entity('Customer', { schema: 'dbo' })
export class Customer {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerID',
    default: () => 'newsequentialid()',
  })
  customerId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('nvarchar', { name: 'LastName', nullable: true, length: 20 })
  lastName!: string | null;

  @Column('nvarchar', { name: 'FirstName', nullable: true, length: 20 })
  firstName!: string | null;

  @Column('nchar', { name: 'MiddleInitial', length: 1 })
  middleInitial!: string;

  @Column('nvarchar', { name: 'Phone', nullable: true, length: 16 })
  phone!: string | null;

  @Column('nvarchar', { name: 'Badge', nullable: true, length: 40 })
  badge!: string | null;

  @Column('nvarchar', { name: 'City', nullable: true, length: 16 })
  city!: string | null;

  @Column('nvarchar', { name: 'State', nullable: true, length: 2 })
  state!: string | null;

  @Column('nvarchar', { name: 'Zip', nullable: true, length: 16 })
  zip!: string | null;

  @Column('datetime', { name: 'BirthDate', nullable: true })
  birthDate!: Date | null;

  @Column('nvarchar', { name: 'Directions', nullable: true, length: 600 })
  directions!: string | null;

  @Column('nvarchar', { name: 'Comments', nullable: true, length: 600 })
  comments!: string | null;

  @Column('nvarchar', { name: 'Address1', nullable: true, length: 64 })
  address1!: string | null;

  @Column('nvarchar', { name: 'Address2', nullable: true, length: 64 })
  address2!: string | null;

  @Column('int', { name: 'AvailableCredit' })
  availableCredit!: number;

  @Column('int', { name: 'CreditLimit' })
  creditLimit!: number;

  @Column('smallint', { name: 'YtdYear' })
  ytdYear!: number;

  @Column('int', { name: 'YtdTotal' })
  ytdTotal!: number;

  @Column('int', { name: 'YtxTotal' })
  ytxTotal!: number;

  @Column('nvarchar', { name: 'Email', nullable: true, length: 100 })
  email!: string | null;

  @Column('nvarchar', { name: 'UserData', nullable: true, length: 20 })
  userData!: string | null;

  @Column('nvarchar', { name: 'Extension', nullable: true, length: 6 })
  extension!: string | null;

  @Column('nvarchar', { name: 'Company', nullable: true, length: 32 })
  company!: string | null;

  @Column('int', { name: 'MealCount' })
  mealCount!: number;

  @Column('binary', { name: 'BCItems', length: 25 })
  bcItems!: Buffer;

  @Column('tinyint', { name: 'DeliveryZone' })
  deliveryZone!: number;

  @Column('tinyint', { name: 'PriceLevel' })
  priceLevel!: number;

  @Column('varbinary', { name: 'FPBuffer', nullable: true, length: 6000 })
  fpBuffer!: Buffer | null;

  @Column('int', { name: 'UsedPlansBit', default: () => '(0)' })
  usedPlansBit!: number;

  @Column('int', { name: 'CustomerDiscount', default: () => '(0)' })
  customerDiscount!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'Phone2', nullable: true, length: 16 })
  phone2!: string | null;

  @Column('nvarchar', { name: 'Phone3', nullable: true, length: 16 })
  phone3!: string | null;

  @Column('nvarchar', { name: 'Phone4', nullable: true, length: 16 })
  phone4!: string | null;

  @Column('nvarchar', { name: 'Phone5', nullable: true, length: 16 })
  phone5!: string | null;

  @Column('nvarchar', { name: 'Extension2', nullable: true, length: 6 })
  extension2!: string | null;

  @Column('nvarchar', { name: 'Extension3', nullable: true, length: 6 })
  extension3!: string | null;

  @Column('nvarchar', { name: 'Extension4', nullable: true, length: 6 })
  extension4!: string | null;

  @Column('nvarchar', { name: 'Extension5', nullable: true, length: 6 })
  extension5!: string | null;

  @Column('int', { name: 'WebID', default: () => '(0)' })
  webId!: number;

  @Column('nvarchar', { name: 'CustomerCard', nullable: true, length: 16 })
  customerCard!: string | null;

  @Column('bit', { name: 'CustomerCardReassign', default: () => '(0)' })
  customerCardReassign!: boolean;

  @Column('int', { name: 'ParentCustomer', default: () => '(0)' })
  parentCustomer!: number;

  @Column('int', { name: 'CardCount', default: () => '(0)' })
  cardCount!: number;

  @OneToMany(() => CustomerCard, (customerCard) => customerCard.customer)
  customerCards!: CustomerCard[];

  @OneToMany(
    () => CustomerLastOrder,
    (customerLastOrder) => customerLastOrder.customer
  )
  customerLastOrders!: CustomerLastOrder[];

  @OneToMany(() => CustomerPlan, (customerPlan) => customerPlan.customer)
  customerPlans!: CustomerPlan[];
}
