import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Break } from './Break';

@Index('IX_BreakJob', ['breakId'], {})
@Index('PK_BreakJob', ['breakJobId'], { unique: true })
@Entity('BreakJob', { schema: 'dbo' })
export class BreakJob {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BreakJobID',
    default: () => 'newsequentialid()',
  })
  breakJobId!: string;

  @Column('uniqueidentifier', { name: 'BreakID' })
  breakId!: string;

  @Column('int', { name: 'JobCode', default: () => '(0)' })
  jobCode!: number;

  @ManyToOne(() => Break, (breakObj) => breakObj.breakJobs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'BreakID', referencedColumnName: 'breakId' }])
  break!: Break;
}
