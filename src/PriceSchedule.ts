import { Column, Entity, Index } from 'typeorm';

@Index('PK_PriceSchedule_1', ['priceScheduleId'], { unique: true })
@Entity('PriceSchedule', { schema: 'dbo' })
export class PriceSchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PriceScheduleID',
    default: () => 'newsequentialid()',
  })
  priceScheduleId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'PriceScheduleIndex' })
  priceScheduleIndex!: number;

  @Column('nvarchar', { name: 'PriceScheduleName', length: 30 })
  priceScheduleName!: string;

  @Column('int', { name: 'ScheduleDays' })
  scheduleDays!: number;

  @Column('int', { name: 'StartTime', default: () => '(0)' })
  startTime!: number;

  @Column('int', { name: 'EndTime', default: () => '(0)' })
  endTime!: number;

  @Column('bit', { name: 'IsSeasonal', default: () => '(0)' })
  isSeasonal!: boolean;

  @Column('int', { name: 'SeasonalStartMonth', default: () => '(0)' })
  seasonalStartMonth!: number;

  @Column('int', { name: 'SeasonalStartDay', default: () => '(0)' })
  seasonalStartDay!: number;

  @Column('int', { name: 'SeasonalEndMonth', default: () => '(0)' })
  seasonalEndMonth!: number;

  @Column('int', { name: 'SeasonalEndDay', default: () => '(0)' })
  seasonalEndDay!: number;
}
