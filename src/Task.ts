import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TaskItem } from './TaskItem';

@Index('PK_TaskSchedule', ['taskId'], { unique: true })
@Entity('Task', { schema: 'dbo' })
export class Task {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaskID',
    default: () => 'newsequentialid()',
  })
  taskId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'LastTaskIndex' })
  lastTaskIndex!: number;

  @OneToMany(() => TaskItem, (taskItem) => taskItem.task)
  taskItems!: TaskItem[];
}
