import { Column, Entity, Index } from 'typeorm';

@Index('PK_CustomerNumber', ['customerNumberId'], { unique: true })
@Entity('CustomerNumber', { schema: 'dbo' })
export class CustomerNumber {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerNumberID',
    default: () => 'newsequentialid()',
  })
  customerNumberId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;
}
