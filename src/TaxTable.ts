import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tax } from './Tax';

@Index('IX_TaxTable', ['taxId'], {})
@Index('PK_TaxTable', ['taxTableId'], { unique: true })
@Entity('TaxTable', { schema: 'dbo' })
export class TaxTable {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaxTableID',
    default: () => 'newsequentialid()',
  })
  taxTableId!: string;

  @Column('uniqueidentifier', { name: 'TaxID' })
  taxId!: string;

  @Column('int', { name: 'TaxTableIndex', default: () => '(0)' })
  taxTableIndex!: number;

  @Column('int', { name: 'UpToAmount' })
  upToAmount!: number;

  @Column('int', { name: 'TaxAmount' })
  taxAmount!: number;

  @ManyToOne(() => Tax, (tax) => tax.taxTables, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TaxID', referencedColumnName: 'taxId' }])
  tax!: Tax;
}
