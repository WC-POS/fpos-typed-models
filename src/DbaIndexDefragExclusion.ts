import { Column, Entity, Index } from 'typeorm';

@Index('PK_indexDefragExclusion_v40', ['databaseId', 'objectId', 'indexId'], {
  unique: true,
})
@Entity('dba_indexDefragExclusion', { schema: 'dbo' })
export class DbaIndexDefragExclusion {
  @Column('int', { primary: true, name: 'databaseID' })
  databaseId!: number;

  @Column('nvarchar', { name: 'databaseName', length: 128 })
  databaseName!: string;

  @Column('int', { primary: true, name: 'objectID' })
  objectId!: number;

  @Column('nvarchar', { name: 'objectName', length: 128 })
  objectName!: string;

  @Column('int', { primary: true, name: 'indexID' })
  indexId!: number;

  @Column('nvarchar', { name: 'indexName', length: 128 })
  indexName!: string;

  @Column('int', { name: 'exclusionMask' })
  exclusionMask!: number;
}
