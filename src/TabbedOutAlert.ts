import { Column, Entity, Index } from 'typeorm';

@Index('PK_TabbedOutAlert', ['messageId'], { unique: true })
@Entity('TabbedOutAlert', { schema: 'dbo' })
export class TabbedOutAlert {
  @Column('uniqueidentifier', { primary: true, name: 'MessageID' })
  messageId!: string;

  @Column('nvarchar', { name: 'TabOutCode', length: 10 })
  tabOutCode!: string;

  @Column('nvarchar', { name: 'Message', length: 2000 })
  message!: string;

  @Column('bit', { name: 'WasViewed', default: () => '(0)' })
  wasViewed!: boolean;
}
