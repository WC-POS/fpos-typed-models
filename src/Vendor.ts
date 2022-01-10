import { Column, Entity, Index, OneToMany } from 'typeorm';
import { VendorPurchase } from './VendorPurchase';

@Index('PK_Vendor', ['vendorId'], { unique: true })
@Entity('Vendor', { schema: 'dbo' })
export class Vendor {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'VendorID',
    default: () => 'newsequentialid()',
  })
  vendorId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'VendorName', length: 20 })
  vendorName!: string;

  @Column('nvarchar', { name: 'Phone', nullable: true, length: 16 })
  phone!: string | null;

  @Column('nvarchar', { name: 'Fax', nullable: true, length: 16 })
  fax!: string | null;

  @Column('nvarchar', { name: 'Address', nullable: true, length: 64 })
  address!: string | null;

  @Column('nvarchar', { name: 'City', nullable: true, length: 16 })
  city!: string | null;

  @Column('nvarchar', { name: 'State', nullable: true, length: 2 })
  state!: string | null;

  @Column('nvarchar', { name: 'Zip', nullable: true, length: 16 })
  zip!: string | null;

  @Column('nvarchar', { name: 'Notes', nullable: true, length: 420 })
  notes!: string | null;

  @OneToMany(() => VendorPurchase, (vendorPurchase) => vendorPurchase.vendor)
  vendorPurchases!: VendorPurchase[];
}
