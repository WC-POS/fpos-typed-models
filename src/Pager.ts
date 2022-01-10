import { Column, Entity, Index, OneToMany } from 'typeorm';
import { PagerEmployee } from './PagerEmployee';
import { PagerMessageQueue } from './PagerMessageQueue';

@Index('PK_Pager', ['pagerId'], { unique: true })
@Entity('Pager', { schema: 'dbo' })
export class Pager {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PagerID',
    default: () => 'newsequentialid()',
  })
  pagerId!: string;

  @Column('int', { name: 'PagerType', default: () => '(0)' })
  pagerType!: number;

  @Column('nvarchar', { name: 'PagerDescription', length: 50 })
  pagerDescription!: string;

  @Column('int', { name: 'PagerNumber', default: () => '(0)' })
  pagerNumber!: number;

  @Column('bit', { name: 'IsEnabled', default: () => '(0)' })
  isEnabled!: boolean;

  @OneToMany(() => PagerEmployee, (pagerEmployee) => pagerEmployee.pager)
  pagerEmployees!: PagerEmployee[];

  @OneToMany(
    () => PagerMessageQueue,
    (pagerMessageQueue) => pagerMessageQueue.pager
  )
  pagerMessageQueues!: PagerMessageQueue[];
}
