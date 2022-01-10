import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ReportGroupLayout } from './ReportGroupLayout';

@Index('PK__ReportGroup', ['reportGroupId'], { unique: true })
@Entity('_ReportGroup', { schema: 'dbo' })
export class ReportGroup {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportGroupID',
    default: () => 'newsequentialid()',
  })
  reportGroupId!: string;

  @Column('nvarchar', { name: 'Name', nullable: true })
  name!: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description!: string | null;

  @Column('uniqueidentifier', { name: 'CategoryID' })
  categoryId!: string;

  @Column('int', { name: 'ParamLinkage', default: () => '(0)' })
  paramLinkage!: number;

  @OneToMany(
    () => ReportGroupLayout,
    (reportGroupLayout) => reportGroupLayout.reportGroup
  )
  reportGroupLayouts!: ReportGroupLayout[];
}
