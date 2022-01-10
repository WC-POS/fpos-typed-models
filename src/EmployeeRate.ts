import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('IX_EmployeeRate', ['employeeId'], {})
@Index('PK_EmployeeRate', ['employeeRateId'], { unique: true })
@Entity('EmployeeRate', { schema: 'dbo' })
export class EmployeeRate {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EmployeeRateID',
    default: () => 'newsequentialid()',
  })
  employeeRateId!: string;

  @Column('uniqueidentifier', { name: 'EmployeeID' })
  employeeId!: string;

  @Column('int', { name: 'RateIndex', default: () => '(0)' })
  rateIndex!: number;

  @Column('int', { name: 'WorkCenter' })
  workCenter!: number;

  @Column('int', { name: 'OvertimeRate' })
  overtimeRate!: number;

  @Column('int', { name: 'RegularRate' })
  regularRate!: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeRates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'EmployeeID', referencedColumnName: 'employeeId' }])
  employee!: Employee;
}
