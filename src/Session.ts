import { Column, Entity, Index } from 'typeorm';

@Index('PK_Session', ['sessionId'], { unique: true })
@Entity('Session', { schema: 'dbo' })
export class Session {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SessionID',
    default: () => 'newsequentialid()',
  })
  sessionId!: string;

  @Column('datetime', { name: 'sessionDate' })
  sessionDate!: Date;

  @Column('nvarchar', { name: 'sessionKey', length: 200 })
  sessionKey!: string;

  @Column('datetime', { name: 'lastActivityDate' })
  lastActivityDate!: Date;
}
