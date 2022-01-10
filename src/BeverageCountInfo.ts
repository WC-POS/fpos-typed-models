import { Column, Entity, Index } from 'typeorm';

@Index('PK_BeverageCountInfo', ['beverageCountInfoId'], { unique: true })
@Entity('BeverageCountInfo', { schema: 'dbo' })
export class BeverageCountInfo {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'BeverageCountInfoID',
    default: () => 'newsequentialid()',
  })
  beverageCountInfoId!: string;

  @Column('smallint', { name: 'EmpID', default: () => '(0)' })
  empId!: number;

  @Column('smallint', { name: 'CountType', default: () => '(0)' })
  countType!: number;

  @Column('datetime', { name: 'EnteredTime' })
  enteredTime!: Date;
}
