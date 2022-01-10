import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Pager } from './Pager';

@Index('PK_PagerMessageQueue', ['pagerMessageQueueId'], { unique: true })
@Entity('PagerMessageQueue', { schema: 'dbo' })
export class PagerMessageQueue {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PagerMessageQueueID',
    default: () => 'newsequentialid()',
  })
  pagerMessageQueueId!: string;

  @Column('nvarchar', { name: 'Message', length: 512 })
  message!: string;

  @Column('int', { name: 'RetryCount', default: () => '(0)' })
  retryCount!: number;

  @Column('datetime', { name: 'LastUpdate', default: () => 'getdate()' })
  lastUpdate!: Date;

  @ManyToOne(() => Pager, (pager) => pager.pagerMessageQueues, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'PagerID', referencedColumnName: 'pagerId' }])
  pager!: Pager;
}
