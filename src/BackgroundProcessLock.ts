import { Column, Entity, Index } from 'typeorm';

@Index('PK__BackgroundProcessLock', ['backgroundProcessLockId'], {
  unique: true,
})
@Index(
  'UQ__BackgroundProcessLock_BackgroundProcessName',
  ['backgroundProcessName'],
  { unique: true }
)
@Entity('_BackgroundProcessLock', { schema: 'dbo' })
export class BackgroundProcessLock {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BackgroundProcessLockId',
  })
  backgroundProcessLockId!: string;

  @Column('nvarchar', {
    name: 'BackgroundProcessName',
    unique: true,
    length: 50,
  })
  backgroundProcessName!: string;

  @Column('bit', { name: 'Locked', default: () => '(0)' })
  locked!: boolean;

  @Column('nvarchar', {
    name: 'LockingApplication',
    nullable: true,
    length: 50,
    default: () => '(0)',
  })
  lockingApplication!: string | null;
}
