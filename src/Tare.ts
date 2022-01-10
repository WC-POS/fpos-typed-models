import { Column, Entity, Index } from 'typeorm';

@Index('PK_Tare', ['tareId'], { unique: true })
@Entity('Tare', { schema: 'dbo' })
export class Tare {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TareID',
    default: () => 'newsequentialid()',
  })
  tareId!: string;

  @Column('nvarchar', { name: 'Description', length: 27, default: () => "''" })
  description!: string;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'Weight', default: () => '(0)' })
  weight!: number;
}
