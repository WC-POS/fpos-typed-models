import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Customer } from './Customer';

@Index('IX_CustomerCard', ['customerId'], {})
@Index('IX_CustomerCard_DataVersion', ['dataVersion'], {})
@Index('PK_CustomerCard', ['customerCardId'], { unique: true })
@Entity('CustomerCard', { schema: 'dbo' })
export class CustomerCard {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CustomerCardID',
    default: () => 'newsequentialid()',
  })
  customerCardId!: string;

  @Column('uniqueidentifier', { name: 'CustomerID' })
  customerId!: string;

  @Column('int', { name: 'CardIndex' })
  cardIndex!: number;

  @Column('int', { name: 'CardSource' })
  cardSource!: number;

  @Column('binary', { name: 'CreditCard', length: 136, default: () => '(0)' })
  creditCard!: Buffer;

  @Column('bit', { name: 'IsE2EEncryption', default: () => '(0)' })
  isE2EEncryption!: boolean;

  @Column('binary', { name: 'EncryptedBlock', nullable: true, length: 232 })
  encryptedBlock!: Buffer | null;

  @Column('binary', { name: 'EncryptionKey', nullable: true, length: 40 })
  encryptionKey!: Buffer | null;

  @Column('int', { name: 'DataVersion', default: () => '(0)' })
  dataVersion!: number;

  @Column('uniqueidentifier', { name: 'DataID', nullable: true })
  dataId!: string | null;

  @Column('binary', { name: 'EncryptedRawSwipe', nullable: true, length: 1024 })
  encryptedRawSwipe!: Buffer | null;

  @Column('binary', { name: 'VaultID', nullable: true, length: 128 })
  vaultId!: Buffer | null;

  @Column('int', { name: 'VaultMediaIndex', default: () => '(0)' })
  vaultMediaIndex!: number;

  @ManyToOne(() => Customer, (customer) => customer.customerCards, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CustomerID', referencedColumnName: 'customerId' }])
  customer!: Customer;
}
