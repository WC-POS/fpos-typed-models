import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('PK__ReportParameterValues', ['reportParameterValuesId'], {
  unique: true,
})
@Entity('_ReportParameterValues', { schema: 'dbo' })
export class ReportParameterValues {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportParameterValuesID',
    default: () => 'newsequentialid()',
  })
  reportParameterValuesId!: string;

  @Column('uniqueidentifier', { name: 'ReportID', nullable: true })
  reportId!: string | null;

  @Column('nvarchar', { name: 'ParameterValues', nullable: true, length: 4000 })
  parameterValues!: string | null;

  @ManyToOne(() => Employee, (employee) => employee.reportParameterValues, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'EmployeeID', referencedColumnName: 'employeeId' }])
  employee!: Employee;
}
