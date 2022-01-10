import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdLinkContent', ['linkId'], { unique: true })
@Entity('AdLinkContent', { schema: 'dbo' })
export class AdLinkContent {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'LinkID',
    default: () => 'newsequentialid()',
  })
  linkId!: string;

  @Column('uniqueidentifier', { name: 'PlayListID' })
  playListId!: string;

  @Column('uniqueidentifier', { name: 'PlaylistItemID' })
  playlistItemId!: string;

  @Column('int', { name: 'MediaDisplayTime' })
  mediaDisplayTime!: number;

  @Column('int', { name: 'TransitionNumber', default: () => '(6)' })
  transitionNumber!: number;

  @Column('int', { name: 'ItemOrder' })
  itemOrder!: number;

  @Column('datetime', { name: 'UpdateDate', nullable: true })
  updateDate!: Date | null;

  @Column('bit', { name: 'IsEnabled' })
  isEnabled!: boolean;

  @Column('int', { name: 'MediaType', default: () => '(0)' })
  mediaType!: number;
}
