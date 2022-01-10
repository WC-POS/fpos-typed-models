import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdScoreContentLink', ['linkTemplateId'], { unique: true })
@Entity('AdTemplateContentLink', { schema: 'dbo' })
export class AdTemplateContentLink {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LinkTemplateID',
    default: () => 'newsequentialid()',
  })
  linkTemplateId!: string;

  @Column('uniqueidentifier', { name: 'PlaylistItemID' })
  playlistItemId!: string;

  @Column('uniqueidentifier', {
    name: 'TemplateID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  templateId!: string;

  @Column('int', { name: 'ContentIDTag' })
  contentIdTag!: number;

  @Column('int', { name: 'Display' })
  display!: number;

  @Column('int', { name: 'Width', default: () => '(0)' })
  width!: number;

  @Column('int', { name: 'Height', default: () => '(0)' })
  height!: number;
}
