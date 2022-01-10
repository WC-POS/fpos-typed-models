import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Department } from './Department';

@Index('PK_DepartmentTranslation', ['departmentTranslationId'], {
  unique: true,
})
@Entity('DepartmentTranslation', { schema: 'dbo' })
export class DepartmentTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DepartmentTranslationID',
    default: () => 'newsequentialid()',
  })
  departmentTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(
    () => Department,
    (department) => department.departmentTranslations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'DepartmentID', referencedColumnName: 'departmentId' }])
  department!: Department;
}
