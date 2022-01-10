import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Report } from './Report';

@Index('PK__ReportCategory', ['reportCategoryId'], { unique: true })
@Entity('_ReportCategory', { schema: 'dbo' })
export class ReportCategory {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportCategoryID',
    default: () => 'newsequentialid()',
  })
  reportCategoryId!: string;

  @Column('nvarchar', { name: 'CategoryName', nullable: true })
  categoryName!: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description!: string | null;

  @Column('int', { name: 'SortPriority' })
  sortPriority!: number;

  @OneToMany(() => Report, (report) => report.reportCategory)
  reports!: Report[];
}
