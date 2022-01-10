import { Column, Entity, Index } from 'typeorm';

@Index('PK_FollowMe', ['followMeId'], { unique: true })
@Entity('FollowMe', { schema: 'dbo' })
export class FollowMe {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'FollowMeID',
    default: () => 'newsequentialid()',
  })
  followMeId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('uniqueidentifier', { name: 'EmployeeID' })
  employeeId!: string;

  @Column('smallint', { name: 'CurrentTerminal', default: () => '(0)' })
  currentTerminal!: number;

  @Column('smallint', { name: 'RequestTermimal', default: () => '(0)' })
  requestTermimal!: number;

  @Column('smallint', { name: 'State', default: () => '(0)' })
  state!: number;
}
