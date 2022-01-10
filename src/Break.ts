import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BreakJob } from './BreakJob';

@Index('PK_Break', ['breakId'], { unique: true })
@Entity('Break', { schema: 'dbo' })
export class Break {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BreakID',
    default: () => 'newsequentialid()',
  })
  breakId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'BreakIndex' })
  breakIndex!: number;

  @Column('nvarchar', { name: 'BreakName', length: 50 })
  breakName!: string;

  @Column('bit', { name: 'IsPaid' })
  isPaid!: boolean;

  @Column('int', { name: 'MinutesAllowed' })
  minutesAllowed!: number;

  @Column('int', { name: 'MinutesToQualify' })
  minutesToQualify!: number;

  @Column('bit', { name: 'PunchIn', default: () => '(0)' })
  punchIn!: boolean;

  @Column('bit', { name: 'TrackEndBreak', default: () => '(0)' })
  trackEndBreak!: boolean;

  @OneToMany(() => BreakJob, (breakJob) => breakJob.break)
  breakJobs!: BreakJob[];
}
