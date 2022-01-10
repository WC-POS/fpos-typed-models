import { Column, Entity, Index } from 'typeorm';

@Index('PK__MobileMe__C1AAEE6C1936994C', ['mobileMessageId'], { unique: true })
@Entity('MobileMessage', { schema: 'dbo' })
export class MobileMessage {
  @Column('uniqueidentifier', { primary: true, name: 'MobileMessageID' })
  mobileMessageId!: string;

  @Column('nvarchar', { name: 'MessageText', nullable: true, length: 200 })
  messageText!: string | null;
}
