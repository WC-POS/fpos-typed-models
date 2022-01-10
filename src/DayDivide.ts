import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_DayDivide', ['dayDivideId'], { unique: true })
@Entity('DayDivide', { schema: 'dbo' })
export class DayDivide {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DayDivideID' })
  dayDivideId!: number;

  @Column('datetime', { name: 'DayDivideDateTime', nullable: true })
  dayDivideDateTime!: Date | null;

  @Column('datetime', { name: 'DayDivideDateTimeNXT', nullable: true })
  dayDivideDateTimeNxt!: Date | null;
}
