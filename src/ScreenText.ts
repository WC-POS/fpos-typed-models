import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Screen } from './Screen';
import { ScreenTextTranslation } from './ScreenTextTranslation';

@Index('IX_ScreenText', ['screenId'], {})
@Index('PK_ScreenText', ['screenTextId'], { unique: true })
@Entity('ScreenText', { schema: 'dbo' })
export class ScreenText {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenTextID',
    default: () => 'newsequentialid()',
  })
  screenTextId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenTextIndex', default: () => '(0)' })
  screenTextIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('nvarchar', { name: 'Text', nullable: true, length: 40 })
  text!: string | null;

  @Column('int', { name: 'FontSize', default: () => '(19)' })
  fontSize!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenTexts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;

  @OneToMany(
    () => ScreenTextTranslation,
    (screenTextTranslation) => screenTextTranslation.screenText
  )
  screenTextTranslations!: ScreenTextTranslation[];
}
