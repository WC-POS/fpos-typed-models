import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdPlayListItem', ['playlistItemId'], { unique: true })
@Entity('AdPlayListItem', { schema: 'dbo' })
export class AdPlayListItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PlaylistItemID',
    default: () => 'newsequentialid()',
  })
  playlistItemId!: string;

  @Column('nvarchar', { name: 'ItemName', length: 50 })
  itemName!: string;

  @Column('nvarchar', { name: 'MediaType', length: 50 })
  mediaType!: string;

  @Column('varbinary', { name: 'MediaFile' })
  mediaFile!: Buffer;

  @Column('datetime', { name: 'UpdateDate' })
  updateDate!: Date;

  @Column('bit', { name: 'IsEnabled', default: () => '(1)' })
  isEnabled!: boolean;

  @Column('bit', { name: 'LoadContent', default: () => "'False'" })
  loadContent!: boolean;

  @Column('nvarchar', {
    name: 'OriginalFileName',
    length: 50,
    default: () => "' '",
  })
  originalFileName!: string;
}
