import { Column, Entity, Index } from 'typeorm';

@Index('PK_EmployeeLaborGroupHistory', ['laborGroupHistoryId'], {
  unique: true,
})
@Entity('EmployeeLaborGroupHistory', { schema: 'dbo' })
export class EmployeeLaborGroupHistory {
  @Column('uniqueidentifier', { primary: true, name: 'LaborGroupHistoryID' })
  laborGroupHistoryId!: string;

  @Column('uniqueidentifier', { name: 'LaborGroupID' })
  laborGroupId!: string;

  @Column('datetime', { name: 'Date' })
  date!: Date;

  @Column('smallint', { name: 'EmpID', default: () => '(0)' })
  empId!: number;
}
