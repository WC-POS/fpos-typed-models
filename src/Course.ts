import { Column, Entity, Index } from 'typeorm';

@Index('PK_Course', ['courseId'], { unique: true })
@Entity('Course', { schema: 'dbo' })
export class Course {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CourseID',
    default: () => 'newsequentialid()',
  })
  courseId!: string;

  @Column('nvarchar', { name: 'Description', length: 20, default: () => "''" })
  description!: string;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
