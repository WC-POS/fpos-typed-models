import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tax } from './Tax';

@Index('PK_TaxTranslation', ['taxTranslationId'], { unique: true })
@Entity('TaxTranslation', { schema: 'dbo' })
export class TaxTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaxTranslationID',
    default: () => 'newsequentialid()',
  })
  taxTranslationId!: string;

  @Column('int', { name: 'Language' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Tax, (tax) => tax.taxTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TaxID', referencedColumnName: 'taxId' }])
  tax!: Tax;
}
