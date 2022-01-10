import { Column, Entity, Index } from 'typeorm';

@Index('PK_CreditDeviceInfo', ['creditDeviceInfoId'], { unique: true })
@Entity('CreditDeviceInfo', { schema: 'dbo' })
export class CreditDeviceInfo {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CreditDeviceInfoID',
    default: () => 'newsequentialid()',
  })
  creditDeviceInfoId!: string;

  @Column('int', { name: 'UniqueID', default: () => '(0)' })
  uniqueId!: number;
}
