import { Column, Entity, Index } from 'typeorm';

@Index('PK_BackupSettings', ['backupSettingsId'], { unique: true })
@Entity('BackupSettings', { schema: 'dbo' })
export class BackupSettings {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BackupSettingsID',
    default: () => 'newsequentialid()',
  })
  backupSettingsId!: string;

  @Column('nvarchar', { name: 'ZipKey' })
  zipKey!: string;

  @Column('datetime', { name: 'BackupTime' })
  backupTime!: Date;

  @Column('nvarchar', { name: 'BackupName', length: 50 })
  backupName!: string;

  @Column('bit', { name: 'Enabled' })
  enabled!: boolean;

  @Column('nvarchar', { name: 'EmailOnCompletion' })
  emailOnCompletion!: string;

  @Column('nvarchar', { name: 'EmailOnFailure' })
  emailOnFailure!: string;
}
