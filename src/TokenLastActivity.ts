import { Column, Entity, Index } from 'typeorm';

@Index('PK_TokenLastActivity', ['token'], { unique: true })
@Entity('TokenLastActivity', { schema: 'dbo' })
export class TokenLastActivity {
  @Column('varchar', { primary: true, name: 'Token', length: 100 })
  token!: string;

  @Column('datetime', { name: 'LastActive', nullable: true })
  lastActive!: Date | null;

  @Column('uniqueidentifier', { name: 'UserId' })
  userId!: string;
}
