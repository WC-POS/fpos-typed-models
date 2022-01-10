import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SaleCreditCard', ['saleId'], {})
@Index('IX_SaleCreditCard_DataVersion', ['dataVersion'], {})
@Index('PK_EJCreditCards', ['saleCreditCardId'], { unique: true })
@Entity('SaleCreditCard', { schema: 'dbo' })
export class SaleCreditCard {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SaleCreditCardID',
    default: () => 'newsequentialid()',
  })
  saleCreditCardId!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'CardIndex' })
  cardIndex!: number;

  @Column('binary', {
    name: 'CardNum',
    nullable: true,
    length: 40,
    default: () => '(0)',
  })
  cardNum!: Buffer | null;

  @Column('binary', {
    name: 'ExpirationDate',
    nullable: true,
    length: 16,
    default: () => '(0)',
  })
  expirationDate!: Buffer | null;

  @Column('binary', { name: 'AuthResponse', nullable: true, length: 32 })
  authResponse!: Buffer | null;

  @Column('binary', { name: 'CardName', nullable: true, length: 40 })
  cardName!: Buffer | null;

  @Column('binary', { name: 'ReferenceNumber', nullable: true, length: 24 })
  referenceNumber!: Buffer | null;

  @Column('int', { name: 'AuthorizeAmount' })
  authorizeAmount!: number;

  @Column('int', { name: 'EmployeeTips' })
  employeeTips!: number;

  @Column('int', { name: 'HouseTips' })
  houseTips!: number;

  @Column('tinyint', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('tinyint', { name: 'CardType' })
  cardType!: number;

  @Column('tinyint', { name: 'TipTerm' })
  tipTerm!: number;

  @Column('int', { name: 'UKRefNo' })
  ukRefNo!: number;

  @Column('int', { name: 'BGCBalance' })
  bgcBalance!: number;

  @Column('nvarchar', { name: 'BankGCIssueCurr', nullable: true, length: 8 })
  bankGcIssueCurr!: string | null;

  @Column('int', { name: 'BankGCICPrevBal' })
  bankGcicPrevBal!: number;

  @Column('int', { name: 'BankGCICEndBal' })
  bankGcicEndBal!: number;

  @Column('nvarchar', { name: 'BankGCICExchRate', nullable: true, length: 12 })
  bankGcicExchRate!: string | null;

  @Column('bit', { name: 'IsE2EEncryption', default: () => '(0)' })
  isE2EEncryption!: boolean;

  @Column('binary', { name: 'EncryptedBlock', nullable: true, length: 232 })
  encryptedBlock!: Buffer | null;

  @Column('binary', { name: 'EncryptionKey', nullable: true, length: 40 })
  encryptionKey!: Buffer | null;

  @Column('int', { name: 'CardSource', default: () => '(0)' })
  cardSource!: number;

  @Column('bit', { name: 'WasRefunded', default: () => '(0)' })
  wasRefunded!: boolean;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;

  @Column('binary', { name: 'EncryptedRawSwipe', nullable: true, length: 1024 })
  encryptedRawSwipe!: Buffer | null;

  @Column('uniqueidentifier', { name: 'SignatureID', nullable: true })
  signatureId!: string | null;

  @Column('bit', { name: 'IsMoneris', default: () => '(0)' })
  isMoneris!: boolean;

  @Column('binary', { name: 'VaultID', nullable: true, length: 128 })
  vaultId!: Buffer | null;

  @Column('binary', { name: 'ReferenceData', nullable: true, length: 48 })
  referenceData!: Buffer | null;

  @Column('binary', { name: 'ProcessData', nullable: true, length: 48 })
  processData!: Buffer | null;

  @Column('binary', { name: 'EMVApplicationLabel', nullable: true, length: 48 })
  emvApplicationLabel!: Buffer | null;

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

  @Column('binary', { name: 'ZipCode', nullable: true, length: 24 })
  zipCode!: Buffer | null;

  @Column('nvarchar', { name: 'OfflineID', nullable: true, length: 128 })
  offlineId!: string | null;

  @Column('bit', { name: 'IsOffline', default: () => '(0)' })
  isOffline!: boolean;

  @Column('tinyint', { name: 'OfflineTerminal', default: () => '(0)' })
  offlineTerminal!: number;

  @Column('bit', { name: 'IsReturn', default: () => '(0)' })
  isReturn!: boolean;

  @Column('nvarchar', { name: 'ReportCardNumber', nullable: true, length: 40 })
  reportCardNumber!: string | null;

  @Column('nvarchar', { name: 'ReportCardName', nullable: true, length: 40 })
  reportCardName!: string | null;

  @Column('nvarchar', {
    name: 'ReportAuthResponse',
    nullable: true,
    length: 40,
  })
  reportAuthResponse!: string | null;

  @Column('nvarchar', { name: 'ReportTranID', nullable: true, length: 40 })
  reportTranId!: string | null;

  @Column('nvarchar', { name: 'ReportZipCode', nullable: true, length: 40 })
  reportZipCode!: string | null;

  @Column('nvarchar', { name: 'ReportCardType', nullable: true, length: 40 })
  reportCardType!: string | null;

  @ManyToOne(() => Sale, (sale) => sale.saleCreditCards, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
