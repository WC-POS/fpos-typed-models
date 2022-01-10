import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Media } from './Media';

@Index('PK_MediaTranslation', ['mediaTranslationId'], { unique: true })
@Entity('MediaTranslation', { schema: 'dbo' })
export class MediaTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MediaTranslationID',
    default: () => 'newsequentialid()',
  })
  mediaTranslationId!: string;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Media, (media) => media.mediaTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MediaID', referencedColumnName: 'mediaId' }])
  media!: Media;
}
