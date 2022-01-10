import { Column, Entity, Index } from 'typeorm';

@Index('PK_CorporateMessage', ['corporateMessageId'], { unique: true })
@Entity('CorporateMessage', { schema: 'dbo' })
export class CorporateMessage {
  @Column('uniqueidentifier', { primary: true, name: 'CorporateMessageID' })
  corporateMessageId!: string;

  @Column('int', { name: 'State', default: () => '(0)' })
  state!: number;

  @Column('nvarchar', {
    name: 'Url',
    nullable: true,
    length: 1024,
    default: () => "''",
  })
  url!: string | null;

  @Column('nvarchar', { name: 'ApplicationName', length: 50 })
  applicationName!: string;
}
