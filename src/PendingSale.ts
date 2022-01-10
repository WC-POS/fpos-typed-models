import { Column, Entity, Index } from 'typeorm';

@Index('PK_PendingSale', ['pendingSaleId'], { unique: true })
@Entity('PendingSale', { schema: 'dbo' })
export class PendingSale {
  @Column('bit', { name: 'AllowPartialAuth' })
  allowPartialAuth!: boolean;

  @Column('int', { name: 'AuthBalance' })
  authBalance!: number;

  @Column('binary', { name: 'AuthCardName', length: 128 })
  authCardName!: Buffer;

  @Column('binary', { name: 'AuthCardNumber', length: 32 })
  authCardNumber!: Buffer;

  @Column('binary', { name: 'AuthCardNumberEncrypted', length: 384 })
  authCardNumberEncrypted!: Buffer;

  @Column('binary', { name: 'AuthCardType', length: 128 })
  authCardType!: Buffer;

  @Column('smallint', { name: 'AuthCV2' })
  authCv2!: number;

  @Column('binary', { name: 'AuthCV2StrEncrypted', length: 384 })
  authCv2StrEncrypted!: Buffer;

  @Column('int', { name: 'AuthDataVersion' })
  authDataVersion!: number;

  @Column('binary', { name: 'AuthEncryptedBlock', length: 233 })
  authEncryptedBlock!: Buffer;

  @Column('binary', { name: 'AuthEncryptionKey', length: 41 })
  authEncryptionKey!: Buffer;

  @Column('binary', { name: 'AuthExpirationDateEncrypted', length: 384 })
  authExpirationDateEncrypted!: Buffer;

  @Column('bit', { name: 'AuthIsE2EEncryption' })
  authIsE2EEncryption!: boolean;

  @Column('int', { name: 'AuthMediaIndex' })
  authMediaIndex!: number;

  @Column('binary', { name: 'AuthMSRSwipe', length: 512 })
  authMsrSwipe!: Buffer;

  @Column('binary', { name: 'AuthReferenceData', length: 40 })
  authReferenceData!: Buffer;

  @Column('binary', { name: 'AuthReferenceNumber', length: 17 })
  authReferenceNumber!: Buffer;

  @Column('binary', { name: 'AuthResponse', length: 40 })
  authResponse!: Buffer;

  @Column('int', { name: 'AuthSource' })
  authSource!: number;

  @Column('int', { name: 'AuthTipAmount' })
  authTipAmount!: number;

  @Column('binary', { name: 'AuthTrack2Encrypted', length: 384 })
  authTrack2Encrypted!: Buffer;

  @Column('int', { name: 'AuthTransactionAmount' })
  authTransactionAmount!: number;

  @Column('int', { name: 'AuthZipCode' })
  authZipCode!: number;

  @Column('tinyint', { name: 'CardIndex' })
  cardIndex!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('datetime', { name: 'CreateDate' })
  createDate!: Date;

  @Column('bit', { name: 'DoingROA' })
  doingRoa!: boolean;

  @Column('int', { name: 'MSREncryptionType' })
  msrEncryptionType!: number;

  @Column('smallint', { name: 'EmployeeID' })
  employeeId!: number;

  @Column('uniqueidentifier', { primary: true, name: 'PendingSaleID' })
  pendingSaleId!: string;

  @Column('bit', { name: 'InOfflineMode' })
  inOfflineMode!: boolean;

  @Column('bit', { name: 'IsPreAuth' })
  isPreAuth!: boolean;

  @Column('bit', { name: 'IsRefund' })
  isRefund!: boolean;

  @Column('binary', { name: 'PublicKey', length: 2048 })
  publicKey!: Buffer;

  @Column('bigint', { name: 'PublicKeyLength' })
  publicKeyLength!: string;

  @Column('int', { name: 'NoNonSufficentFundsAmount' })
  noNonSufficentFundsAmount!: number;

  @Column('int', { name: 'RevenueCenter' })
  revenueCenter!: number;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('binary', { name: 'Salt', length: 384 })
  salt!: Buffer;

  @Column('bigint', { name: 'SaltLength' })
  saltLength!: string;

  @Column('binary', { name: 'SessionID', length: 21 })
  sessionId!: Buffer;

  @Column('uniqueidentifier', { name: 'TransactionID' })
  transactionId!: string;

  @Column('bit', { name: 'UseBalance' })
  useBalance!: boolean;

  @Column('tinyint', { name: 'OpCode' })
  opCode!: number;
}
