import { Column, Entity, Index } from 'typeorm';

@Index('PK_Alert', ['alertId'], { unique: true })
@Entity('Alert', { schema: 'dbo' })
export class Alert {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'AlertID',
    default: () => 'newsequentialid()',
  })
  alertId!: string;

  @Column('nvarchar', { name: 'AlertName', length: 50 })
  alertName!: string;

  @Column('datetime', { name: 'LastAlert' })
  lastAlert!: Date;

  @Column('bit', { name: 'IsEnabled' })
  isEnabled!: boolean;

  @Column('int', { name: 'AlertType' })
  alertType!: number;

  @Column('nvarchar', { name: 'AlertTo' })
  alertTo!: string;
}
