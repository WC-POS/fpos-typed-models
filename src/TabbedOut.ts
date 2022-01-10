import { Column, Entity, Index } from 'typeorm';

@Index('IX_TabbedOut_DataVersion', ['dataVersion'], {})
@Index('PK_TabbedOut', ['tabOutId'], { unique: true })
@Entity('TabbedOut', { schema: 'dbo' })
export class TabbedOut {
  @Column('uniqueidentifier', { primary: true, name: 'TabOutID' })
  tabOutId!: string;

  @Column('nvarchar', { name: 'TabOutCode', length: 10 })
  tabOutCode!: string;

  @Column('datetime', { name: 'CreateDate' })
  createDate!: Date;

  @Column('binary', { name: 'CardName', length: 40 })
  cardName!: Buffer;

  @Column('binary', { name: 'CardNum', length: 40, default: () => '(0)' })
  cardNum!: Buffer;

  @Column('binary', {
    name: 'ExpirationDate',
    length: 16,
    default: () => '(0)',
  })
  expirationDate!: Buffer;

  @Column('binary', { name: 'AuthResponse', length: 32 })
  authResponse!: Buffer;

  @Column('binary', { name: 'ReferenceNumber', length: 24 })
  referenceNumber!: Buffer;

  @Column('binary', { name: 'PreAuthResponse', length: 32 })
  preAuthResponse!: Buffer;

  @Column('nvarchar', { name: 'Address', length: 50 })
  address!: string;

  @Column('nvarchar', { name: 'Zip', length: 50 })
  zip!: string;

  @Column('nvarchar', { name: 'Email', length: 50 })
  email!: string;

  @Column('nvarchar', { name: 'Phone', length: 50 })
  phone!: string;

  @Column('int', { name: 'MediaIndex', default: () => '(0)' })
  mediaIndex!: number;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;
}
