import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdDisplay', ['displayId'], { unique: true })
@Entity('AdDisplay', { schema: 'dbo' })
export class AdDisplay {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DisplayID',
    default: () => 'newsequentialid()',
  })
  displayId!: string;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'DisplayNumber' })
  displayNumber!: number;

  @Column('bit', { name: 'IsScoreBoard' })
  isScoreBoard!: boolean;

  @Column('bit', { name: 'IsPause' })
  isPause!: boolean;

  @Column('uniqueidentifier', { name: 'DefaultPlayListID' })
  defaultPlayListId!: string;

  @Column('bit', { name: 'IsEnabled' })
  isEnabled!: boolean;

  @Column('nvarchar', { name: 'DisplayTitle', length: 500 })
  displayTitle!: string;

  @Column('nvarchar', { name: 'Status', length: 50 })
  status!: string;

  @Column('bit', { name: 'IsPrimary' })
  isPrimary!: boolean;

  @Column('bit', { name: 'IsMenuBoard', default: () => '(0)' })
  isMenuBoard!: boolean;

  @Column('uniqueidentifier', {
    name: 'MenuTemplate',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  menuTemplate!: string;

  @Column('uniqueidentifier', {
    name: 'ScoreBoardTemplate',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  scoreBoardTemplate!: string;
}
