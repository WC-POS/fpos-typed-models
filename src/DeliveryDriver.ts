import { Column, Entity, Index } from 'typeorm';

@Index('PK_DeliveryDriver', ['driverId'], { unique: true })
@Entity('DeliveryDriver', { schema: 'dbo' })
export class DeliveryDriver {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DriverID',
    default: () => 'newsequentialid()',
  })
  driverId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('nvarchar', { name: 'LastName', nullable: true, length: 20 })
  lastName!: string | null;

  @Column('nvarchar', { name: 'FirstName', nullable: true, length: 20 })
  firstName!: string | null;

  @Column('tinyint', { name: 'InOutStatus', default: () => '(0)' })
  inOutStatus!: number;

  @Column('datetime', { name: 'LastDate', nullable: true })
  lastDate!: Date | null;
}
