import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ActivityDetail } from './ActivityDetail';

@Index('IX_Activity_Action', ['action'], {})
@Index('IX_Activity_ActivityDate', ['activityDate'], {})
@Index('PK_Activity', ['activityId'], { unique: true })
@Entity('Activity', { schema: 'dbo' })
export class Activity {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ActivityID',
    default: () => 'newsequentialid()',
  })
  activityId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'ActivityDate' })
  activityDate!: Date;

  @Column('int', { name: 'Action', default: () => '(0)' })
  action!: number;

  @Column('int', { name: 'TerminalNumber', default: () => '(0)' })
  terminalNumber!: number;

  @Column('int', { name: 'TableNumber', default: () => '(0)' })
  tableNumber!: number;

  @Column('int', { name: 'CheckNumber', default: () => '(0)' })
  checkNumber!: number;

  @Column('int', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @Column('int', { name: 'SupervisorID', default: () => '(0)' })
  supervisorId!: number;

  @Column('int', { name: 'Data1', default: () => '(0)' })
  data1!: number;

  @Column('int', { name: 'Data2', default: () => '(0)' })
  data2!: number;

  @Column('nvarchar', { name: 'Data', nullable: true, length: 50 })
  data!: string | null;

  @Column('tinyint', { name: 'SmallData', default: () => '(0)' })
  smallData!: number;

  @Column('nvarchar', { name: 'IPAddress', nullable: true, length: 45 })
  ipAddress!: string | null;

  @Column('uniqueidentifier', {
    name: 'OAuthAspNetUserId',
    default: () => 'CONVERT([uniqueidentifier],CONVERT([binary],(0),(0)),(0))',
  })
  oAuthAspNetUserId!: string;

  @OneToMany(() => ActivityDetail, (activityDetail) => activityDetail.activity)
  activityDetails!: ActivityDetail[];
}
