import { Column, Entity, Index } from 'typeorm';

@Index('PK_EmployeeTip', ['employeeTipId'], { unique: true })
@Entity('EmployeeTip', { schema: 'dbo' })
export class EmployeeTip {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EmployeeTipID',
    default: () => 'newsequentialid()',
  })
  employeeTipId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'IsFinalized' })
  isFinalized!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('smallint', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('int', { name: 'Declared' })
  declared!: number;

  @Column('datetime', { name: 'TipDate' })
  tipDate!: Date;

  @Column('int', { name: 'SharedEmpID' })
  sharedEmpId!: number;

  @Column('bit', { name: 'IsEndOfShift', default: () => '(0)' })
  isEndOfShift!: boolean;
}
