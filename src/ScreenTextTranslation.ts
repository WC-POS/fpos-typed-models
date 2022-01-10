import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenText } from './ScreenText';

@Index('PK_ScreenTextTranslation', ['screenTextTranslationId'], {
  unique: true,
})
@Entity('ScreenTextTranslation', { schema: 'dbo' })
export class ScreenTextTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenTextTranslationID',
    default: () => 'newsequentialid()',
  })
  screenTextTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenText,
    (screenText) => screenText.screenTextTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'ScreenTextID', referencedColumnName: 'screenTextId' }])
  screenText!: ScreenText;
}
