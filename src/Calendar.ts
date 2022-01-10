import { Column, Entity, Index } from 'typeorm';

@Index('IX__Calendar_Date', ['date'], {})
@Index('IX__Calendar_DayOfWeek', ['dayOfWeek'], {})
@Index('PK__Calendar', ['date'], { unique: true })
@Entity('_Calendar', { schema: 'dbo' })
export class Calendar {
  @Column('datetime', { primary: true, name: 'Date' })
  date!: Date;

  @Column('tinyint', { name: 'Day', nullable: true })
  day!: number | null;

  @Column('tinyint', { name: 'Month', nullable: true })
  month!: number | null;

  @Column('date', { name: 'FirstOfMonth', nullable: true })
  firstOfMonth!: Date | null;

  @Column('nvarchar', { name: 'MonthName', nullable: true, length: 9 })
  monthName!: string | null;

  @Column('tinyint', { name: 'Week', nullable: true })
  week!: number | null;

  @Column('tinyint', { name: 'DayOfWeek', nullable: true })
  dayOfWeek!: number | null;

  @Column('tinyint', { name: 'Quarter', nullable: true })
  quarter!: number | null;

  @Column('smallint', { name: 'Year', nullable: true })
  year!: number | null;

  @Column('date', { name: 'FirstOfYear', nullable: true })
  firstOfYear!: Date | null;
}
