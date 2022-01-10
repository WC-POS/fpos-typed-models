import { Column, Entity, Index } from 'typeorm';

@Index('PK_OrderType', ['orderTypeId'], { unique: true })
@Entity('OrderType', { schema: 'dbo' })
export class OrderType {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'OrderTypeID',
    default: () => 'newsequentialid()',
  })
  orderTypeId!: string;

  @Column('bit', { name: 'ApplyZoneCharge', default: () => '(0)' })
  applyZoneCharge!: boolean;

  @Column('int', { name: 'AuthSlipPrinter', default: () => '(0)' })
  authSlipPrinter!: number;

  @Column('nvarchar', { name: 'Description', length: 19, default: () => "''" })
  description!: string;

  @Column('bit', {
    name: 'DoNotOverrideCustomerZoneCharge',
    default: () => '(0)',
  })
  doNotOverrideCustomerZoneCharge!: boolean;

  @Column('bit', { name: 'ExcludeCustomerInfoOnReceipt', default: () => '(0)' })
  excludeCustomerInfoOnReceipt!: boolean;

  @Column('int', { name: 'ForgiveTax', default: () => '(0)' })
  forgiveTax!: number;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('bit', { name: 'RequireDriver', default: () => '(0)' })
  requireDriver!: boolean;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'VDUColor', default: () => '(0)' })
  vduColor!: number;

  @Column('bit', { name: 'VDUNoBumpUntilSettled', default: () => '(0)' })
  vduNoBumpUntilSettled!: boolean;

  @Column('int', { name: 'ZoneCharge', default: () => '(0)' })
  zoneCharge!: number;

  @Column('bit', { name: 'OverrideOrder', default: () => '(0)' })
  overrideOrder!: boolean;

  @Column('nvarchar', { name: 'OrderHeader', length: 512, default: () => "''" })
  orderHeader!: string;

  @Column('nvarchar', { name: 'OrderFooter', length: 512, default: () => "''" })
  orderFooter!: string;
}
