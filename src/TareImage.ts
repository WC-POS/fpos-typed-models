import { Column, Entity, Index } from 'typeorm';

@Index('PK_TareImage', ['tareImageId'], { unique: true })
@Entity('TareImage', { schema: 'dbo' })
export class TareImage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TareImageID',
    default: () => 'newsequentialid()',
  })
  tareImageId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'TareImageIndex' })
  tareImageIndex!: number;

  @Column('nvarchar', { name: 'ImageName', length: 20 })
  imageName!: string;
}
