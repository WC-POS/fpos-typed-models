import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Sale } from './Sale';

@Index('IX_SalePMSUsed', ['saleId'], {})
@Index('PK_EJPMSUsed', ['salePmsid'], { unique: true })
@Entity('SalePMS', { schema: 'dbo' })
export class SalePms {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SalePMSID',
    default: () => 'newsequentialid()',
  })
  salePmsid!: string;

  @Column('uniqueidentifier', { name: 'SaleID' })
  saleId!: string;

  @Column('int', { name: 'PMSIndex' })
  pmsIndex!: number;

  @Column('nvarchar', { name: 'AccountNumber', nullable: true, length: 50 })
  accountNumber!: string | null;

  @Column('int', { name: 'AuthAmount', default: () => '(0)' })
  authAmount!: number;

  @Column('int', { name: 'EmployeeTip', default: () => '(0)' })
  employeeTip!: number;

  @Column('int', { name: 'HouseTip', default: () => '(0)' })
  houseTip!: number;

  @Column('int', { name: 'MediaIndex', default: () => '(0)' })
  mediaIndex!: number;

  @Column('nvarchar', { name: 'GuestName', nullable: true, length: 50 })
  guestName!: string | null;

  @Column('int', { name: 'Gratuity', default: () => '(0)' })
  gratuity!: number;

  @Column('int', { name: 'Discount', default: () => '(0)' })
  discount!: number;

  @Column('int', { name: 'Bucket1', default: () => '(0)' })
  bucket1!: number;

  @Column('int', { name: 'Bucket2', default: () => '(0)' })
  bucket2!: number;

  @Column('int', { name: 'Bucket3', default: () => '(0)' })
  bucket3!: number;

  @Column('int', { name: 'Bucket4', default: () => '(0)' })
  bucket4!: number;

  @ManyToOne(() => Sale, (sale) => sale.salePms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SaleID', referencedColumnName: 'saleId' }])
  sale!: Sale;
}
