import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('PK_DashboardWidget', ['dashboardWidgetId'], { unique: true })
@Entity('DashboardWidget', { schema: 'dbo' })
export class DashboardWidget {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DashboardWidgetID',
    default: () => 'newsequentialid()',
  })
  dashboardWidgetId!: string;

  @Column('nvarchar', { name: 'Name', length: 50 })
  name!: string;

  @Column('int', { name: 'WidgetType' })
  widgetType!: number;

  @Column('int', { name: 'SortOrder' })
  sortOrder!: number;

  @Column('varbinary', { name: 'SettingsBytes', nullable: true })
  settingsBytes!: Buffer | null;

  @ManyToOne(() => Employee, (employee) => employee.dashboardWidgets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'EmployeeID', referencedColumnName: 'employeeId' }])
  employee!: Employee;
}
