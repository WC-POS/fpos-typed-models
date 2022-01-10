import { Column, Entity, Index } from 'typeorm';

@Index('IX_CustomerCharge', ['customerNumber'], {})
@Index('PK_CustomerCharge', ['customerChargeId'], { unique: true })
@Entity('CustomerCharge', { schema: 'dbo' })
export class CustomerCharge {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerChargeID',
    default: () => 'newsequentialid()',
  })
  customerChargeId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('datetime', { name: 'ChargeDate' })
  chargeDate!: Date;

  @Column('smallint', { name: 'ChargeType' })
  chargeType!: number;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 50 })
  description!: string | null;

  @Column('tinyint', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('smallint', { name: 'SupervisorID' })
  supervisorId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'SubTotal' })
  subTotal!: number;

  @Column('int', { name: 'TaxTotal' })
  taxTotal!: number;

  @Column('int', { name: 'Gratuity' })
  gratuity!: number;

  @Column('int', { name: 'TogoSurcharge' })
  togoSurcharge!: number;

  @Column('int', { name: 'AmoutRounded' })
  amoutRounded!: number;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('uniqueidentifier', {
    name: 'RegionID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  regionId!: string;
}
