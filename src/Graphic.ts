import { Column, Entity, Index } from 'typeorm';

@Index('PK_Graphics', ['graphicId'], { unique: true })
@Entity('Graphic', { schema: 'dbo' })
export class Graphic {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GraphicID',
    default: () => 'newsequentialid()',
  })
  graphicId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'GraphicName', length: 20 })
  graphicName!: string;

  @Column('varbinary', { name: 'DibData' })
  dibData!: Buffer;

  @Column('int', { name: 'GraphicType', default: () => '(0)' })
  graphicType!: number;
}
