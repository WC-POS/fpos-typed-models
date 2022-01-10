import { Column, Entity, Index } from 'typeorm';

@Index('IX_PreAuth_DataVersion', ['dataVersion'], {})
@Index('PK_PreAuth', ['preAuthId'], { unique: true })
@Entity('PreAuth', { schema: 'dbo' })
export class PreAuth {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PreAuthID',
    default: () => 'newsequentialid()',
  })
  preAuthId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'PreAuthDate' })
  preAuthDate!: Date;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('binary', { name: 'CardNumber', length: 40, default: () => '(0)' })
  cardNumber!: Buffer;

  @Column('binary', {
    name: 'ExpirationDate',
    length: 16,
    default: () => '(0)',
  })
  expirationDate!: Buffer;

  @Column('binary', { name: 'AuthResponse', length: 32 })
  authResponse!: Buffer;

  @Column('binary', { name: 'CardName', length: 40 })
  cardName!: Buffer;

  @Column('binary', { name: 'AcqRefData', length: 40 })
  acqRefData!: Buffer;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('bit', { name: 'UsedToSettle' })
  usedToSettle!: boolean;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('binary', {
    name: 'Track2',
    nullable: true,
    length: 48,
    default: () => '(0)',
  })
  track2!: Buffer | null;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('bit', { name: 'IsE2EEncryption', default: () => '(0)' })
  isE2EEncryption!: boolean;

  @Column('binary', { name: 'EncryptedBlock', nullable: true, length: 232 })
  encryptedBlock!: Buffer | null;

  @Column('binary', { name: 'EncryptionKey', nullable: true, length: 40 })
  encryptionKey!: Buffer | null;

  @Column('int', { name: 'CardSource', default: () => '(0)' })
  cardSource!: number;

  @Column('binary', { name: 'ReferenceNumber', nullable: true, length: 24 })
  referenceNumber!: Buffer | null;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;

  @Column('binary', { name: 'EncryptedRawSwipe', nullable: true, length: 1024 })
  encryptedRawSwipe!: Buffer | null;

  @Column('binary', { name: 'VaultID', nullable: true, length: 128 })
  vaultId!: Buffer | null;

  @Column('binary', { name: 'ReferenceData', nullable: true, length: 48 })
  referenceData!: Buffer | null;

  @Column('binary', { name: 'ProcessData', nullable: true, length: 48 })
  processData!: Buffer | null;

  @Column('binary', { name: 'EMVApplicationData', nullable: true, length: 48 })
  emvApplicationData!: Buffer | null;

  @Column('binary', { name: 'EMVAID', nullable: true, length: 48 })
  emvaid!: Buffer | null;

  @Column('binary', { name: 'EMVTVR', nullable: true, length: 48 })
  emvtvr!: Buffer | null;

  @Column('binary', { name: 'EMVIAD', nullable: true, length: 48 })
  emviad!: Buffer | null;

  @Column('binary', { name: 'EMVTSI', nullable: true, length: 48 })
  emvtsi!: Buffer | null;

  @Column('binary', { name: 'EMVARC', nullable: true, length: 48 })
  emvarc!: Buffer | null;

  @Column('binary', { name: 'EMVCVM', nullable: true, length: 48 })
  emvcvm!: Buffer | null;

  @Column('binary', { name: 'EMVEntryMethod', nullable: true, length: 48 })
  emvEntryMethod!: Buffer | null;
}
