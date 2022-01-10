import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ReportGroup } from './ReportGroup';

@Index('IX_ReportGroupID', ['reportGroupId'], {})
@Index('PK_ReportGroupLayout', ['reportGroupLayoutId'], { unique: true })
@Entity('_ReportGroupLayout', { schema: 'dbo' })
export class ReportGroupLayout {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportGroupLayoutID',
    default: () => 'newsequentialid()',
  })
  reportGroupLayoutId!: string;

  @Column('uniqueidentifier', { name: 'ReportGroupID' })
  reportGroupId!: string;

  @Column('uniqueidentifier', { name: 'ReportID' })
  reportId!: string;

  @Column('uniqueidentifier', { name: 'LayoutID' })
  layoutId!: string;

  @Column('int', { name: 'ReportLayoutIndex' })
  reportLayoutIndex!: number;

  @Column('int', { name: 'GroupLayoutIndex' })
  groupLayoutIndex!: number;

  @Column('nvarchar', { name: 'ReportName', nullable: true })
  reportName!: string | null;

  @Column('nvarchar', { name: 'LayoutName', nullable: true })
  layoutName!: string | null;

  @ManyToOne(
    () => ReportGroup,
    (reportGroup) => reportGroup.reportGroupLayouts,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'ReportGroupID', referencedColumnName: 'reportGroupId' },
  ])
  reportGroup!: ReportGroup;
}
