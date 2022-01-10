import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ScreenAutoMenu } from './ScreenAutoMenu';

@Index(
  'PK_ScreenAutoMenuPreviousButtonTextTranslation',
  ['screenAutoMenuPreviousButtonTextTranslationId'],
  { unique: true }
)
@Entity('ScreenAutoMenuPreviousButtonTextTranslation', { schema: 'dbo' })
export class ScreenAutoMenuPreviousButtonTextTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenAutoMenuPreviousButtonTextTranslationID',
    default: () => 'newsequentialid()',
  })
  screenAutoMenuPreviousButtonTextTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => ScreenAutoMenu,
    (screenAutoMenu) =>
      screenAutoMenu.screenAutoMenuPreviousButtonTextTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ScreenAutoMenuID', referencedColumnName: 'screenAutoMenuId' },
  ])
  screenAutoMenu!: ScreenAutoMenu;
}
