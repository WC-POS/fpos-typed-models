import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Task } from './Task';

@Index('IX_TaskItem', ['taskId'], {})
@Index('PK_TaskScheduleItem', ['taskItemId'], { unique: true })
@Entity('TaskItem', { schema: 'dbo' })
export class TaskItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaskItemID',
    default: () => 'newsequentialid()',
  })
  taskItemId!: string;

  @Column('uniqueidentifier', { name: 'TaskID' })
  taskId!: string;

  @Column('smallint', { name: 'TaskIndex' })
  taskIndex!: number;

  @Column('nvarchar', { name: 'TaskDescription', nullable: true, length: 100 })
  taskDescription!: string | null;

  @Column('nvarchar', { name: 'ProgramName', nullable: true, length: 100 })
  programName!: string | null;

  @Column('datetime', { name: 'RunDate' })
  runDate!: Date;

  @Column('smallint', { name: 'Frequency' })
  frequency!: number;

  @Column('smallint', { name: 'Interval' })
  interval!: number;

  @Column('smallint', { name: 'WindowState' })
  windowState!: number;

  @ManyToOne(() => Task, (task) => task.taskItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TaskID', referencedColumnName: 'taskId' }])
  task!: Task;
}
