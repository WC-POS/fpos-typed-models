import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Vendor } from './Vendor';

@Index('PK_VendorPurchase', ['vendorPurchaseId'], { unique: true })
@Entity('VendorPurchase', { schema: 'dbo' })
export class VendorPurchase {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'VendorPurchaseID',
    default: () => 'newsequentialid()',
  })
  vendorPurchaseId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'ItemName', length: 32, default: () => "''" })
  itemName!: string;

  @Column('int', { name: 'ItemCount', default: () => '(0)' })
  itemCount!: number;

  @Column('datetime', { name: 'ReceivedDate', default: () => 'getdate()' })
  receivedDate!: Date;

  @Column('bit', { name: 'IsRemoval', default: () => '(0)' })
  isRemoval!: boolean;

  @Column('nvarchar', {
    name: 'DepartmentName',
    length: 10,
    default: () => "''",
  })
  departmentName!: string;

  @ManyToOne(() => Vendor, (vendor) => vendor.vendorPurchases, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'VendorID', referencedColumnName: 'vendorId' }])
  vendor!: Vendor;
}
