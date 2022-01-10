import { Column, Entity, Index } from 'typeorm';

@Index('PK_Enterprise', ['entId'], { unique: true })
@Entity('Enterprise', { schema: 'dbo' })
export class Enterprise {
  @Column('uniqueidentifier', { primary: true, name: 'EntID' })
  entId!: string;

  @Column('int', { name: 'ServerIPAddress' })
  serverIpAddress!: number;

  @Column('int', { name: 'CustomerLevel', default: () => '(0)' })
  customerLevel!: number;

  @Column('int', { name: 'GiftLevel', default: () => '(0)' })
  giftLevel!: number;

  @Column('nvarchar', { name: 'EnterpriseName', length: 65 })
  enterpriseName!: string;

  @Column('int', { name: 'CountryCode' })
  countryCode!: number;

  @Column('nvarchar', { name: 'APIKey', nullable: true, length: 200 })
  apiKey!: string | null;

  @Column('nvarchar', { name: 'EmailServer', nullable: true, length: 65 })
  emailServer!: string | null;

  @Column('nvarchar', { name: 'EmailUser', nullable: true, length: 40 })
  emailUser!: string | null;

  @Column('nvarchar', { name: 'EmailPassword', nullable: true, length: 40 })
  emailPassword!: string | null;

  @Column('int', { name: 'EmailPort', default: () => '(0)' })
  emailPort!: number;

  @Column('bit', { name: 'EmailUseSSL', default: () => '(0)' })
  emailUseSsl!: boolean;

  @Column('binary', { name: 'EmailPasswordEnc', nullable: true, length: 40 })
  emailPasswordEnc!: Buffer | null;
}
