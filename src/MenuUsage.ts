import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('PK_MenuUsage', ['menuUsageId'], { unique: true })
@Entity('MenuUsage', { schema: 'dbo' })
export class MenuUsage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MenuUsageID',
    default: () => 'newsequentialid()',
  })
  menuUsageId!: string;

  @Column('nvarchar', { name: 'PageTitle', length: 50 })
  pageTitle!: string;

  @Column('nvarchar', { name: 'RelativePath', length: 100 })
  relativePath!: string;

  @Column('int', { name: 'VisitCount' })
  visitCount!: number;

  @ManyToOne(() => Employee, (employee) => employee.menuUsages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'EmployeeID', referencedColumnName: 'employeeId' }])
  employee!: Employee;
}
