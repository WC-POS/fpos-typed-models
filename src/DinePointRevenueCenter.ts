import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointRevenueCenter', ['revenueCenterIndex'], { unique: true })
@Entity('DinePointRevenueCenter', { schema: 'dbo' })
export class DinePointRevenueCenter {
  @Column('int', { primary: true, name: 'RevenueCenterIndex' })
  revenueCenterIndex!: number;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'RevenueCenter', nullable: true, length: 50 })
  revenueCenter!: string | null;
}
