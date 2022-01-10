import { Column, Entity, Index } from 'typeorm';

@Index('PK_Version', ['versionId'], { unique: true })
@Entity('Version', { schema: 'dbo' })
export class Version {
  @Column('uniqueidentifier', { primary: true, name: 'VersionID' })
  versionId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'CodeVersion', default: () => '(0)' })
  codeVersion!: number;

  @Column('int', { name: 'DatabaseVersion', default: () => '(0)' })
  databaseVersion!: number;

  @Column('int', { name: 'CodeMajor', default: () => '(0)' })
  codeMajor!: number;

  @Column('int', { name: 'CodeMinor', default: () => '(0)' })
  codeMinor!: number;

  @Column('int', { name: 'CodeRevision', default: () => '(0)' })
  codeRevision!: number;

  @Column('int', { name: 'CodeBuild', default: () => '(0)' })
  codeBuild!: number;

  @Column('int', { name: 'CodePatch', default: () => '(0)' })
  codePatch!: number;
}
