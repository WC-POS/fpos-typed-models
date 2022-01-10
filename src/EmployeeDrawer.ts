import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('IX_EmployeeDrawer', ['employeeId'], {})
@Index('PK_EmployeeDrawer', ['employeeDrawerId'], { unique: true })
@Entity('EmployeeDrawer', { schema: 'dbo' })
export class EmployeeDrawer {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EmployeeDrawerID',
    default: () => 'newsequentialid()',
  })
  employeeDrawerId!: string;

  @Column('uniqueidentifier', { name: 'EmployeeID' })
  employeeId!: string;

  @Column('int', { name: 'DrawerIndex', default: () => '(0)' })
  drawerIndex!: number;

  @Column('smallint', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('smallint', { name: 'DrawerNumber' })
  drawerNumber!: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeDrawers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'EmployeeID', referencedColumnName: 'employeeId' }])
  employee!: Employee;
}
