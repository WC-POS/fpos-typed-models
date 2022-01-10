import { Column, Entity, Index } from 'typeorm';

@Index('IX_ReportID', ['reportId'], {})
@Index('PK__ReportSchedule', ['reportScheduleId'], { unique: true })
@Entity('_ReportSchedule', { schema: 'dbo' })
export class ReportSchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportScheduleID',
    default: () => 'newsequentialid()',
  })
  reportScheduleId!: string;

  @Column('uniqueidentifier', { name: 'ReportID' })
  reportId!: string;

  @Column('nvarchar', { name: 'ScheduleName' })
  scheduleName!: string;

  @Column('varbinary', { name: 'PrintOptions', nullable: true })
  printOptions!: Buffer | null;

  @Column('nvarchar', { name: 'ExportFilePath', nullable: true })
  exportFilePath!: string | null;

  @Column('nvarchar', { name: 'EmailFrom', nullable: true })
  emailFrom!: string | null;

  @Column('nvarchar', { name: 'EmailTo', nullable: true })
  emailTo!: string | null;

  @Column('nvarchar', { name: 'EmailSubject', nullable: true })
  emailSubject!: string | null;

  @Column('nvarchar', { name: 'EmailBody', nullable: true })
  emailBody!: string | null;

  @Column('nvarchar', { name: 'EmailHTMLFilePath', nullable: true })
  emailHtmlFilePath!: string | null;

  @Column('nvarchar', { name: 'ScheduleString', nullable: true, length: 48 })
  scheduleString!: string | null;

  @Column('uniqueidentifier', { name: 'ProcessID' })
  processId!: string;

  @Column('varbinary', { name: 'Parameters', nullable: true })
  parameters!: Buffer | null;

  @Column('nvarchar', { name: 'ReportName' })
  reportName!: string;

  @Column('varbinary', { name: 'Layouts', nullable: true })
  layouts!: Buffer | null;

  @Column('bit', { name: 'ZipExport', default: () => '(0)' })
  zipExport!: boolean;

  @Column('nvarchar', { name: 'ScheduleValues', default: () => "' '" })
  scheduleValues!: string;

  @Column('nvarchar', { name: 'SelectedPrinter', default: () => "' '" })
  selectedPrinter!: string;

  @Column('nvarchar', { name: 'OutputOptionsJson', nullable: true })
  outputOptionsJson!: string | null;

  @Column('nvarchar', { name: 'FileFormatsJson', nullable: true })
  fileFormatsJson!: string | null;

  @Column('bit', { name: 'AppendTimestampToFile', default: () => '(1)' })
  appendTimestampToFile!: boolean;
}
