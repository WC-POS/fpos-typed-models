import { Column, Entity, Index } from 'typeorm';

@Index('PK_EmployeeHintShown', ['employeeHintShownId'], { unique: true })
@Entity('EmployeeHintShown', { schema: 'dbo' })
export class EmployeeHintShown {
  @Column('uniqueidentifier', { primary: true, name: 'EmployeeHintShownID' })
  employeeHintShownId!: string;

  @Column('uniqueidentifier', { name: 'EmployeeID' })
  employeeId!: string;

  @Column('int', { name: 'HintIndex' })
  hintIndex!: number;
}
