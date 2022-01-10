import { Column, Entity, Index } from 'typeorm';

@Index('PK_OrderTypes', ['orderTypeIndex'], { unique: true })
@Entity('OrderTypes', { schema: 'dbo' })
export class OrderTypes {
  @Column('int', { primary: true, name: 'OrderTypeIndex' })
  orderTypeIndex!: number;

  @Column('nvarchar', { name: 'Description', length: 50 })
  description!: string;

  @Column('nvarchar', { name: 'WebDescription', length: 50 })
  webDescription!: string;

  @Column('bit', { name: 'IsUsedOnline', default: () => '(0)' })
  isUsedOnline!: boolean;

  @Column('bit', { name: 'IsOnlineMobile', default: () => '(0)' })
  isOnlineMobile!: boolean;

  @Column('bit', { name: 'AddressRequired', default: () => '(0)' })
  addressRequired!: boolean;

  @Column('int', { name: 'MinimumAmount', default: () => '(0)' })
  minimumAmount!: number;

  @Column('int', { name: 'ExtraCharge', default: () => '(0)' })
  extraCharge!: number;

  @Column('bit', { name: 'ShippingRequired', default: () => '(0)' })
  shippingRequired!: boolean;

  @Column('nchar', { name: 'ShippingServiceType', nullable: true, length: 40 })
  shippingServiceType!: string | null;
}
