import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tax } from './Tax';

@Index('IX_TaxSchedule', ['taxId'], {})
@Index('PK_TaxSchedule', ['taxScheduleId'], { unique: true })
@Entity('TaxSchedule', { schema: 'dbo' })
export class TaxSchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaxScheduleID',
    default: () => 'newsequentialid()',
  })
  taxScheduleId!: string;

  @Column('uniqueidentifier', { name: 'TaxID' })
  taxId!: string;

  @Column('int', { name: 'DayIndex' })
  dayIndex!: number;

  @Column('bit', { name: 'UseTax' })
  useTax!: boolean;

  @Column('int', { name: 'StartTime' })
  startTime!: number;

  @Column('int', { name: 'EndTime' })
  endTime!: number;

  @ManyToOne(() => Tax, (tax) => tax.taxSchedules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TaxID', referencedColumnName: 'taxId' }])
  tax!: Tax;
}
