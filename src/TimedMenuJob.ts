import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimedMenu } from './TimedMenu';

@Index('IX_TimedMenuJob', ['timedMenuId'], {})
@Index('PK_TimedMenuJob', ['timedMenuJobId'], { unique: true })
@Entity('TimedMenuJob', { schema: 'dbo' })
export class TimedMenuJob {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TimedMenuJobID',
    default: () => 'newsequentialid()',
  })
  timedMenuJobId!: string;

  @Column('uniqueidentifier', { name: 'TimedMenuID' })
  timedMenuId!: string;

  @Column('int', { name: 'JobCode' })
  jobCode!: number;

  @ManyToOne(() => TimedMenu, (timedMenu) => timedMenu.timedMenuJobs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TimedMenuID', referencedColumnName: 'timedMenuId' }])
  timedMenu!: TimedMenu;
}
