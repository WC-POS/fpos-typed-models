import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenAutoMenu } from './ScreenAutoMenu';

@Index(
  'PK_ScreenAutoMenuNextButtonTextTranslation',
  ['screenAutoMenuNextButtonTextTranslationId'],
  { unique: true }
)
@Entity('ScreenAutoMenuNextButtonTextTranslation', { schema: 'dbo' })
export class ScreenAutoMenuNextButtonTextTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenAutoMenuNextButtonTextTranslationID',
    default: () => 'newsequentialid()',
  })
  screenAutoMenuNextButtonTextTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenAutoMenu,
    (screenAutoMenu) => screenAutoMenu.screenAutoMenuNextButtonTextTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenAutoMenuID', referencedColumnName: 'screenAutoMenuId' },
  ])
  screenAutoMenu!: ScreenAutoMenu;
}
