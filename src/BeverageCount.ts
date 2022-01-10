import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BeverageCountItem } from './BeverageCountItem';

@Index('PK_BeverageCount', ['beverageCountId'], { unique: true })
@Entity('BeverageCount', { schema: 'dbo' })
export class BeverageCount {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BeverageCountID',
    default: () => 'newsequentialid()',
  })
  beverageCountId!: string;

  @Column('smallint', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @Column('smallint', { name: 'GroupID', default: () => '(0)' })
  groupId!: number;

  @Column('int', { name: 'InCount', default: () => '(0)' })
  inCount!: number;

  @Column('int', { name: 'OutCount', default: () => '(0)' })
  outCount!: number;

  @Column('datetime', { name: 'StartTime', nullable: true })
  startTime!: Date | null;

  @Column('datetime', { name: 'EndTime', nullable: true })
  endTime!: Date | null;

  @Column('bit', { name: 'IsEndCount', default: () => '(0)' })
  isEndCount!: boolean;

  @Column('nvarchar', {
    name: 'ComputerName',
    nullable: true,
    length: 64,
    default: () => "''",
  })
  computerName!: string | null;

  @OneToMany(
    () => BeverageCountItem,
    (beverageCountItem) => beverageCountItem.beverageCount
  )
  beverageCountItems!: BeverageCountItem[];
}
