import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Screen } from './Screen';
import { ScreenButtonTranslation } from './ScreenButtonTranslation';

@Index('IX_ScreenButton', ['screenId'], {})
@Index('PK_ScreenButton', ['screenButtonId'], { unique: true })
@Entity('ScreenButton', { schema: 'dbo' })
export class ScreenButton {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenButtonID',
    default: () => 'newsequentialid()',
  })
  screenButtonId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenButtonIndex', default: () => '(0)' })
  screenButtonIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('nvarchar', { name: 'ImageName', nullable: true, length: 20 })
  imageName!: string | null;

  @Column('nvarchar', { name: 'Text', nullable: true })
  text!: string | null;

  @Column('int', { name: 'Data1', nullable: true, default: () => '(0)' })
  data1!: number | null;

  @ManyToOne(() => Screen, (screen) => screen.screenButtons, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;

  @OneToMany(
    () => ScreenButtonTranslation,
    (screenButtonTranslation) => screenButtonTranslation.screenButton
  )
  screenButtonTranslations!: ScreenButtonTranslation[];
}
