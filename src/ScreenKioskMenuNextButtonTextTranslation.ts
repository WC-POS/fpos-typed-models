import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenKioskMenu } from './ScreenKioskMenu';

@Index(
  'PK_ScreenKioskMenuNextButtonTextTranslation',
  ['screenKioskMenuNextButtonTextTranslationId'],
  { unique: true }
)
@Entity('ScreenKioskMenuNextButtonTextTranslation', { schema: 'dbo' })
export class ScreenKioskMenuNextButtonTextTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenKioskMenuNextButtonTextTranslationID',
    default: () => 'newsequentialid()',
  })
  screenKioskMenuNextButtonTextTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenKioskMenu,
    (screenKioskMenu) =>
      screenKioskMenu.screenKioskMenuNextButtonTextTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenKioskMenuID', referencedColumnName: 'screenKioskMenuId' },
  ])
  screenKioskMenu!: ScreenKioskMenu;
}
