import { Column, Entity, Index } from 'typeorm';

@Index('PK_AlertEmails', ['alertEmailId'], { unique: true })
@Entity('AlertEmail', { schema: 'dbo' })
export class AlertEmail {
  @Column('uniqueidentifier', { primary: true, name: 'AlertEmailID' })
  alertEmailId!: string;

  @Column('nvarchar', { name: 'AlertEmailAddress', length: 250 })
  alertEmailAddress!: string;

  @Column('nvarchar', { name: 'AlertEmailFname', length: 50 })
  alertEmailFname!: string;

  @Column('nvarchar', { name: 'AlertEmailLname', length: 50 })
  alertEmailLname!: string;

  @Column('nvarchar', { name: 'AlertEmailPhone', length: 25 })
  alertEmailPhone!: string;

  @Column('nvarchar', { name: 'AlertEmailCarrier', length: 20 })
  alertEmailCarrier!: string;
}
