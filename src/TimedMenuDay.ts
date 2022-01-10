import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimedMenu } from './TimedMenu';

@Index('IX_TimedMenuDay', ['timedMenuId'], {})
@Index('PK_TimedMenuDay', ['timedMenuDayId'], { unique: true })
@Entity('TimedMenuDay', { schema: 'dbo' })
export class TimedMenuDay {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TimedMenuDayID',
    default: () => 'newsequentialid()',
  })
  timedMenuDayId!: string;

  @Column('uniqueidentifier', { name: 'TimedMenuID' })
  timedMenuId!: string;

  @Column('int', { name: 'DayIndex' })
  dayIndex!: number;

  @Column('datetime', { name: 'StartTime' })
  startTime!: Date;

  @Column('datetime', { name: 'EndTime' })
  endTime!: Date;

  @Column('int', { name: 'RevenueCenter' })
  revenueCenter!: number;

  @Column('nvarchar', { name: 'MenuName', length: 50 })
  menuName!: string;

  @Column('nvarchar', { name: 'CommonMenuName', length: 50 })
  commonMenuName!: string;

  @Column('bit', { name: 'IsActive', default: () => '(0)' })
  isActive!: boolean;

  @Column('int', { name: 'TerminalNumber', default: () => '(99)' })
  terminalNumber!: number;

  @ManyToOne(() => TimedMenu, (timedMenu) => timedMenu.timedMenuDays, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TimedMenuID', referencedColumnName: 'timedMenuId' }])
  timedMenu!: TimedMenu;
}
