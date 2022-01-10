import { Column, Entity, Index } from 'typeorm';

@Index('PK__ReportRole', ['reportRoleId'], { unique: true })
@Entity('_ReportRole', { schema: 'dbo' })
export class ReportRole {
  @Column('uniqueidentifier', { primary: true, name: 'ReportRoleID' })
  reportRoleId!: string;

  @Column('uniqueidentifier', { name: 'ReportID' })
  reportId!: string;

  @Column('uniqueidentifier', { name: 'RoleID' })
  roleId!: string;

  @Column('varbinary', { name: 'ReportPermissionBytes', nullable: true })
  reportPermissionBytes!: Buffer | null;
}
