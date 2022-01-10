import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdPlayList', ['playListId'], { unique: true })
@Entity('AdPlayList', { schema: 'dbo' })
export class AdPlayList {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PlayListID',
    default: () => 'newsequentialid()',
  })
  playListId!: string;

  @Column('nvarchar', { name: 'PlayListName', length: 50 })
  playListName!: string;

  @Column('bit', { name: 'IsEnabled', default: () => '(1)' })
  isEnabled!: boolean;

  @Column('nvarchar', { name: 'SyncFolderPath', default: () => "''" })
  syncFolderPath!: string;

  @Column('bit', { name: 'SyncByFileDate', default: () => '(1)' })
  syncByFileDate!: boolean;

  @Column('bit', { name: 'IsSyncFolder', default: () => '(0)' })
  isSyncFolder!: boolean;

  @Column('bit', { name: 'IsUpdated', default: () => '(0)' })
  isUpdated!: boolean;

  @Column('int', { name: 'ImportTime', default: () => '(10)' })
  importTime!: number;

  @Column('bit', { name: 'ImportByName', default: () => '(1)' })
  importByName!: boolean;
}
