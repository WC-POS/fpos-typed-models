import { Column, Entity, Index } from 'typeorm';

@Index('PK_MobileFunctionPermission', ['permissionId'], { unique: true })
@Entity('MobileFunctionPermission', { schema: 'dbo' })
export class MobileFunctionPermission {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PermissionID',
    default: () => 'newsequentialid()',
  })
  permissionId!: string;

  @Column('nvarchar', { name: 'FunctionName', length: 50 })
  functionName!: string;

  @Column('bit', { name: 'AskForSupervisorID', nullable: true })
  askForSupervisorId!: boolean | null;

  @Column('int', { name: 'MinimumSecurityLevel', nullable: true })
  minimumSecurityLevel!: number | null;

  @Column('int', { name: 'TerminalNumber', nullable: true })
  terminalNumber!: number | null;
}
