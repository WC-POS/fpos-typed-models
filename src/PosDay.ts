import { Column, Entity, Index } from 'typeorm';

@Index('PK_POSDay', ['posDayId'], { unique: true })
@Entity('POSDay', { schema: 'dbo' })
export class PosDay {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'POSDayID',
    default: () => 'newsequentialid()',
  })
  posDayId!: string;

  @Column('datetime', { name: 'StartDate' })
  startDate!: Date;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @Column('int', { name: 'StartEmpID', default: () => '(0)' })
  startEmpId!: number;

  @Column('int', { name: 'EndEmpID', default: () => '(0)' })
  endEmpId!: number;

  @Column('int', { name: 'BankDeposit', default: () => '(0)' })
  bankDeposit!: number;

  @Column('nvarchar', { name: 'Comment', nullable: true })
  comment!: string | null;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
