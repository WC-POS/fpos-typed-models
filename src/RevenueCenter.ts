import { Column, Entity, Index } from 'typeorm';

@Index('PK_RevenueCenter', ['revenueCenterId'], { unique: true })
@Entity('RevenueCenter', { schema: 'dbo' })
export class RevenueCenter {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'RevenueCenterID',
    default: () => 'newsequentialid()',
  })
  revenueCenterId!: string;

  @Column('nvarchar', { name: 'Description', default: () => "''" })
  description!: string;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('bit', { name: 'OverrideCCAMIP', default: () => '(0)' })
  overrideCcamip!: boolean;

  @Column('bit', { name: 'OverridePMSRevenueCenter', default: () => '(0)' })
  overridePmsRevenueCenter!: boolean;

  @Column('int', { name: 'PMSRevenueCenter', default: () => '(0)' })
  pmsRevenueCenter!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('binary', { name: 'CCAMIP', nullable: true, length: 24 })
  ccamip!: Buffer | null;

  @Column('binary', { name: 'CreditModuleID', nullable: true, length: 16 })
  creditModuleId!: Buffer | null;

  @Column('binary', { name: 'CreditModuleKey', nullable: true, length: 16 })
  creditModuleKey!: Buffer | null;

  @Column('binary', { name: 'MerchantID', nullable: true, length: 16 })
  merchantId!: Buffer | null;

  @Column('binary', { name: 'TerminalID', nullable: true, length: 24 })
  terminalId!: Buffer | null;

  @Column('bit', { name: 'OverrideCreditSettings', default: () => '(0)' })
  overrideCreditSettings!: boolean;
}
