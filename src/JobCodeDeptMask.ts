import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { JobCode } from './JobCode';

@Index('PK_JobCodeDeptMask', ['jobCodeDeptMaskId'], { unique: true })
@Entity('JobCodeDeptMask', { schema: 'dbo' })
export class JobCodeDeptMask {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'JobCodeDeptMaskID',
    default: () => 'newsequentialid()',
  })
  jobCodeDeptMaskId!: string;

  @Column('nvarchar', { name: 'Mask', length: 10, default: () => "''" })
  mask!: string;

  @Column('int', { name: 'Index', nullable: true })
  index!: number | null;

  @ManyToOne(() => JobCode, (jobCode) => jobCode.jobCodeDeptMasks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'JobCodeID', referencedColumnName: 'jobCodeId' }])
  jobCode!: JobCode;
}
