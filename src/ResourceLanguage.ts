import { Column, Entity, Index } from 'typeorm';

@Index('PK_ResourceLanguage', ['resourceLanguageId'], { unique: true })
@Entity('ResourceLanguage', { schema: 'dbo' })
export class ResourceLanguage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ResourceLanguageID',
    default: () => 'newsequentialid()',
  })
  resourceLanguageId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('int', { name: 'ResourceKey' })
  resourceKey!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;
}
