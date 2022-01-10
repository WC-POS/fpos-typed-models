import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { GiftSeries } from './GiftSeries';

@Index('IX_GiftSeriesAvailability', ['giftSeriesId'], {})
@Index('PK_GiftSeriesAvailability_1', ['giftSeriesAvailabilityId'], {
  unique: true,
})
@Entity('GiftSeriesAvailability', { schema: 'dbo' })
export class GiftSeriesAvailability {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftSeriesAvailabilityID',
    default: () => 'newsequentialid()',
  })
  giftSeriesAvailabilityId!: string;

  @Column('uniqueidentifier', { name: 'GiftSeriesID' })
  giftSeriesId!: string;

  @Column('int', { name: 'DayIndex' })
  dayIndex!: number;

  @Column('bit', { name: 'IsAvailable' })
  isAvailable!: boolean;

  @Column('int', { name: 'StartTime' })
  startTime!: number;

  @Column('int', { name: 'EndTime' })
  endTime!: number;

  @ManyToOne(
    () => GiftSeries,
    (giftSeries) => giftSeries.giftSeriesAvailabilities,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'GiftSeriesID', referencedColumnName: 'giftSeriesId' }])
  giftSeries!: GiftSeries;
}
