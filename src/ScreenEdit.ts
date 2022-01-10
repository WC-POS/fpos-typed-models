import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenEdit', ['screenId'], {})
@Index('PK_ScreenEdit', ['screenEditId'], { unique: true })
@Entity('ScreenEdit', { schema: 'dbo' })
export class ScreenEdit {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenEditID',
    default: () => 'newsequentialid()',
  })
  screenEditId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenEditIndex', default: () => '(0)' })
  screenEditIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('int', { name: 'FontSize', default: () => '(19)' })
  fontSize!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenEdits, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
