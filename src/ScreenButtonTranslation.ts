import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenButton } from './ScreenButton';

@Index('PK_ScreenButtonTranslation', ['screenButtonTranslationId'], {
  unique: true,
})
@Entity('ScreenButtonTranslation', { schema: 'dbo' })
export class ScreenButtonTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenButtonTranslationID',
    default: () => 'newsequentialid()',
  })
  screenButtonTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenButton,
    (screenButton) => screenButton.screenButtonTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenButtonID', referencedColumnName: 'screenButtonId' },
  ])
  screenButton!: ScreenButton;
}
