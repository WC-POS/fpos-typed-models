import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ReportCategory } from './ReportCategory';
import { ReportFormula } from './ReportFormula';
import { ReportParameter } from './ReportParameter';

@Index('IX_ReportCategoryID', ['reportCategoryId'], {})
@Index('PK__Report', ['reportId'], { unique: true })
@Entity('_Report', { schema: 'dbo' })
export class Report {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportID',
    default: () => 'newsequentialid()',
  })
  reportId!: string;

  @Column('nvarchar', { name: 'ReportName', nullable: true })
  reportName!: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description!: string | null;

  @Column('uniqueidentifier', { name: 'ReportCategoryID' })
  reportCategoryId!: string;

  @Column('varbinary', { name: 'LayoutBytes', nullable: true })
  layoutBytes!: Buffer | null;

  @Column('varbinary', { name: 'DefinitionBytes', nullable: true })
  definitionBytes!: Buffer | null;

  @Column('datetime', {
    name: 'LastEdited',
    default: () => "'1900-01-01T00:00:00.000'",
  })
  lastEdited!: Date;

  @Column('datetime', {
    name: 'CreatedDate',
    default: () => "'1900-01-01T00:00:00.000'",
  })
  createdDate!: Date;

  @Column('uniqueidentifier', { name: 'CreatedBy', nullable: true })
  createdBy!: string | null;

  @Column('varbinary', { name: 'MajorGroupBytes', nullable: true })
  majorGroupBytes!: Buffer | null;

  @ManyToOne(() => ReportCategory, (reportCategory) => reportCategory.reports, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'ReportCategoryID', referencedColumnName: 'reportCategoryId' },
  ])
  reportCategory!: ReportCategory;

  @OneToMany(() => ReportFormula, (reportFormula) => reportFormula.report)
  reportFormulas!: ReportFormula[];

  @OneToMany(() => ReportParameter, (reportParameter) => reportParameter.report)
  reportParameters!: ReportParameter[];
}
