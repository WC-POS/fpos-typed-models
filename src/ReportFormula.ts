import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Report } from './Report';

@Index('IX_ReportID', ['reportId'], {})
@Index('PK__ReportFormula', ['id'], { unique: true })
@Entity('_ReportFormula', { schema: 'dbo' })
export class ReportFormula {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ID',
    default: () => 'newsequentialid()',
  })
  id!: string;

  @Column('nvarchar', { name: 'Name', nullable: true })
  name!: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description!: string | null;

  @Column('varbinary', { name: 'FormulaBytes', nullable: true })
  formulaBytes!: Buffer | null;

  @Column('uniqueidentifier', { name: 'ReportID', nullable: true })
  reportId!: string | null;

  @Column('bit', { name: 'IsActive', default: () => '(1)' })
  isActive!: boolean;

  @ManyToOne(() => Report, (report) => report.reportFormulas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReportID', referencedColumnName: 'reportId' }])
  report!: Report;
}
