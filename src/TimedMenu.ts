import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimedMenuDay } from './TimedMenuDay';
import { TimedMenuJob } from './TimedMenuJob';

@Index('PK_TimedMenu', ['timedMenuId'], { unique: true })
@Entity('TimedMenu', { schema: 'dbo' })
export class TimedMenu {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TimedMenuID',
    default: () => 'newsequentialid()',
  })
  timedMenuId!: string;

  @Column('nvarchar', { name: 'Description', length: 50 })
  description!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'TerminalType', default: () => '(0)' })
  terminalType!: number;

  @OneToMany(() => TimedMenuDay, (timedMenuDay) => timedMenuDay.timedMenu)
  timedMenuDays!: TimedMenuDay[];

  @OneToMany(() => TimedMenuJob, (timedMenuJob) => timedMenuJob.timedMenu)
  timedMenuJobs!: TimedMenuJob[];
}
