import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenHelp', ['screenId'], {})
@Index('PK_ScreenHelp', ['screenHelpId'], { unique: true })
@Entity('ScreenHelp', { schema: 'dbo' })
export class ScreenHelp {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenHelpID',
    default: () => 'newsequentialid()',
  })
  screenHelpId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenHelpIndex', default: () => '(0)' })
  screenHelpIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('nvarchar', { name: 'Topic', nullable: true, length: 40 })
  topic!: string | null;

  @ManyToOne(() => Screen, (screen) => screen.screenHelps, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
