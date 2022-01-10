import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Pager } from './Pager';

@Index('PK_PagerEmployee', ['pagerEmployeeId'], { unique: true })
@Entity('PagerEmployee', { schema: 'dbo' })
export class PagerEmployee {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PagerEmployeeID',
    default: () => 'newsequentialid()',
  })
  pagerEmployeeId!: string;

  @Column('smallint', { name: 'EmployeeID', default: () => '(0)' })
  employeeId!: number;

  @ManyToOne(() => Pager, (pager) => pager.pagerEmployees, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'PagerID', referencedColumnName: 'pagerId' }])
  pager!: Pager;
}
