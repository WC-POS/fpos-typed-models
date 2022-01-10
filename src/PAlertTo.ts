import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PAlert } from './PAlert';

@Index('PK_PAlertEmp', ['alertEmpId'], { unique: true })
@Entity('PAlertTo', { schema: 'dbo' })
export class PAlertTo {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'AlertEmpID',
    default: () => 'newsequentialid()',
  })
  alertEmpId!: string;

  @Column('int', { name: 'ToType' })
  toType!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'ClassIndex' })
  classIndex!: number;

  @ManyToOne(() => PAlert, (pAlert) => pAlert.pAlertTos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'AlertID', referencedColumnName: 'alertId' }])
  alert!: PAlert;
}
