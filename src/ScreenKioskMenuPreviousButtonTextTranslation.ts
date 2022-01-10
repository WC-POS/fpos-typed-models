import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenKioskMenu } from './ScreenKioskMenu';

@Index(
  'PK_ScreenKioskMenuPreviousButtonTextTranslation',
  ['screenKioskMenuPreviousButtonTextTranslationId'],
  { unique: true }
)
@Entity('ScreenKioskMenuPreviousButtonTextTranslation', { schema: 'dbo' })
export class ScreenKioskMenuPreviousButtonTextTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenKioskMenuPreviousButtonTextTranslationID',
    default: () => 'newsequentialid()',
  })
  screenKioskMenuPreviousButtonTextTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenKioskMenu,
    (screenKioskMenu) =>
      screenKioskMenu.screenKioskMenuPreviousButtonTextTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenKioskMenuID', referencedColumnName: 'screenKioskMenuId' },
  ])
  screenKioskMenu!: ScreenKioskMenu;
}
