import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Department } from './Department';

@Index('IX_DepartmentSchedule', ['departmentId'], {})
@Index('PK_DepartmentSchedule', ['departmentScheduleId'], { unique: true })
@Entity('DepartmentSchedule', { schema: 'dbo' })
export class DepartmentSchedule {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DepartmentScheduleID',
    default: () => 'newsequentialid()',
  })
  departmentScheduleId!: string;

  @Column('uniqueidentifier', { name: 'DepartmentID' })
  departmentId!: string;

  @Column('int', { name: 'DayIndex' })
  dayIndex!: number;

  @Column('bit', { name: 'IsUsed', default: () => '(0)' })
  isUsed!: boolean;

  @Column('int', { name: 'StartTime' })
  startTime!: number;

  @Column('int', { name: 'EndTime' })
  endTime!: number;

  @ManyToOne(() => Department, (department) => department.departmentSchedules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'DepartmentID', referencedColumnName: 'departmentId' }])
  department!: Department;
}
