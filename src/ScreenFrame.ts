import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenFrame', ['screenId'], {})
@Index('PK_ScreenFrame', ['screenFrameId'], { unique: true })
@Entity('ScreenFrame', { schema: 'dbo' })
export class ScreenFrame {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenFrameID',
    default: () => 'newsequentialid()',
  })
  screenFrameId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenFrameIndex', default: () => '(0)' })
  screenFrameIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenFrames, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
