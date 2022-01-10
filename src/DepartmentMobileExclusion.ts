import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Department } from './Department';

@Index('IX_DepartmentMobileExclusion_EmpID', ['empId'], {})
@Index('PK_DepartmentMobileExclusion', ['departmentMobileExclusionId'], {
  unique: true,
})
@Entity('DepartmentMobileExclusion', { schema: 'dbo' })
export class DepartmentMobileExclusion {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DepartmentMobileExclusionID',
    default: () => 'newsequentialid()',
  })
  departmentMobileExclusionId!: string;

  @Column('smallint', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @ManyToOne(
    () => Department,
    (department) => department.departmentMobileExclusions,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'DepartmentID', referencedColumnName: 'departmentId' }])
  department!: Department;
}
