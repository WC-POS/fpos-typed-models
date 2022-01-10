import { Column, Entity, Index } from 'typeorm';

@Index('PK__ReportDataSource', ['reportDataSourceId'], { unique: true })
@Entity('_ReportDataSource', { schema: 'dbo' })
export class ReportDataSource {
  @Column('uniqueidentifier', { primary: true, name: 'ReportDataSourceID' })
  reportDataSourceId!: string;

  @Column('nvarchar', { name: 'Name', length: 50 })
  name!: string;

  @Column('varbinary', { name: 'Reports' })
  reports!: Buffer;
}
