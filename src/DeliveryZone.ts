import { Column, Entity, Index } from 'typeorm';

@Index('PK_ZoneCharges', ['deliveryZoneId'], { unique: true })
@Entity('DeliveryZone', { schema: 'dbo' })
export class DeliveryZone {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DeliveryZoneID',
    default: () => 'newsequentialid()',
  })
  deliveryZoneId!: string;

  @Column('int', { name: 'ZoneIndex' })
  zoneIndex!: number;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'ZoneName', length: 32 })
  zoneName!: string;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'DriverAmount', default: () => '(0)' })
  driverAmount!: number;

  @Column('bit', { name: 'IsServiceCharge', default: () => '(0)' })
  isServiceCharge!: boolean;
}
