import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointServingPeriod', ['periodIndex'], { unique: true })
@Entity('DinePointServingPeriod', { schema: 'dbo' })
export class DinePointServingPeriod {
  @Column('int', { primary: true, name: 'PeriodIndex' })
  periodIndex!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'PeriodName', nullable: true, length: 50 })
  periodName!: string | null;

  @Column('datetime', { name: 'PeriodStart', nullable: true })
  periodStart!: Date | null;

  @Column('datetime', { name: 'PeriodEnd', nullable: true })
  periodEnd!: Date | null;
}
