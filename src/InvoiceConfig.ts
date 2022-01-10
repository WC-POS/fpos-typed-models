import { Column, Entity, Index, OneToMany } from 'typeorm';
import { InvoiceConfigObject } from './InvoiceConfigObject';

@Index('PK_InvoiceConfig', ['invoiceConfigId'], { unique: true })
@Entity('InvoiceConfig', { schema: 'dbo' })
export class InvoiceConfig {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'InvoiceConfigID',
    default: () => 'newsequentialid()',
  })
  invoiceConfigId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'StartInvoiceNumber' })
  startInvoiceNumber!: number;

  @Column('int', { name: 'DaysGrace' })
  daysGrace!: number;

  @Column('int', { name: 'MinimumPaymentPercent' })
  minimumPaymentPercent!: number;

  @Column('int', { name: 'PageWidth' })
  pageWidth!: number;

  @Column('int', { name: 'PageHeight' })
  pageHeight!: number;

  @Column('int', { name: 'MaxObjects' })
  maxObjects!: number;

  @Column('bit', { name: 'IncludeZeroBalance' })
  includeZeroBalance!: boolean;

  @Column('bit', { name: 'IncludePositiveBalance' })
  includePositiveBalance!: boolean;

  @Column('bit', { name: 'ShowCheckDetail' })
  showCheckDetail!: boolean;

  @Column('bit', { name: 'ShowGroupTotals' })
  showGroupTotals!: boolean;

  @OneToMany(
    () => InvoiceConfigObject,
    (invoiceConfigObject) => invoiceConfigObject.invoiceConfig
  )
  invoiceConfigObjects!: InvoiceConfigObject[];
}
