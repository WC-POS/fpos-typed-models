import { Column, Entity, Index } from 'typeorm';

@Index('PK_ServingPeriod', ['servingPeriodId'], { unique: true })
@Entity('ServingPeriod', { schema: 'dbo' })
export class ServingPeriod {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ServingPeriodID',
    default: () => 'newsequentialid()',
  })
  servingPeriodId!: string;

  @Column('nvarchar', { name: 'Description', length: 27, default: () => "''" })
  description!: string;

  @Column('datetime', { name: 'EndTime', default: () => 'getdate()' })
  endTime!: Date;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('datetime', { name: 'StartTime', default: () => 'getdate()' })
  startTime!: Date;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
