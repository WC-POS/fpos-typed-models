import { Column, Entity, Index } from 'typeorm';

@Index('PK__ImportMapping', ['importMappingId'], { unique: true })
@Entity('_ImportMapping', { schema: 'dbo' })
export class ImportMapping {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ImportMappingID',
    default: () => 'newsequentialid()',
  })
  importMappingId!: string;

  @Column('nvarchar', { name: 'Description', length: 50 })
  description!: string;

  @Column('nvarchar', { name: 'Identifier', length: 50 })
  identifier!: string;

  @Column('int', { name: 'RowsToSkip', nullable: true })
  rowsToSkip!: number | null;

  @Column('nvarchar', { name: 'FieldMappings', nullable: true })
  fieldMappings!: string | null;

  @Column('bit', { name: 'IsReadOnly', default: () => '(0)' })
  isReadOnly!: boolean;
}
