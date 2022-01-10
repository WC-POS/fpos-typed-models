import { Column, Entity, Index } from 'typeorm';

@Index('PK_CreditDeviceSaleStatus', ['creditDeviceSaleStatusId'], {
  unique: true,
})
@Entity('CreditDeviceSaleStatus', { schema: 'dbo' })
export class CreditDeviceSaleStatus {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CreditDeviceSaleStatusID',
    default: () => 'newsequentialid()',
  })
  creditDeviceSaleStatusId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'Status', default: () => '(0)' })
  status!: number;

  @Column('nvarchar', { name: 'Info', nullable: true, length: 40 })
  info!: string | null;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('datetime', { name: 'LastUpdated' })
  lastUpdated!: Date;
}
