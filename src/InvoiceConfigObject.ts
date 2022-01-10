import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { InvoiceConfig } from './InvoiceConfig';

@Index('IX_InvoiceConfigObject', ['invoiceConfigId'], {})
@Index('PK_InvoiceConfigObject', ['invoiceConfigObjectId'], { unique: true })
@Entity('InvoiceConfigObject', { schema: 'dbo' })
export class InvoiceConfigObject {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'InvoiceConfigObjectID',
    default: () => 'newsequentialid()',
  })
  invoiceConfigObjectId!: string;

  @Column('uniqueidentifier', { name: 'InvoiceConfigID' })
  invoiceConfigId!: string;

  @Column('int', { name: 'ObjectIndex' })
  objectIndex!: number;

  @Column('int', { name: 'Type' })
  type!: number;

  @Column('int', { name: 'X' })
  x!: number;

  @Column('int', { name: 'Y' })
  y!: number;

  @Column('int', { name: 'Width' })
  width!: number;

  @Column('int', { name: 'Height' })
  height!: number;

  @Column('nvarchar', { name: 'Data', nullable: true, length: 80 })
  data!: string | null;

  @Column('int', { name: 'TextType' })
  textType!: number;

  @Column('int', { name: 'TextJustification' })
  textJustification!: number;

  @Column('tinyint', { name: 'ExtraFields' })
  extraFields!: number;

  @Column('nvarchar', { name: 'Font', nullable: true, length: 30 })
  font!: string | null;

  @Column('int', { name: 'TextWidth' })
  textWidth!: number;

  @Column('int', { name: 'Style' })
  style!: number;

  @Column('tinyint', { name: 'BackgroundColor' })
  backgroundColor!: number;

  @Column('tinyint', { name: 'ForeGroundColor' })
  foreGroundColor!: number;

  @ManyToOne(
    () => InvoiceConfig,
    (invoiceConfig) => invoiceConfig.invoiceConfigObjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'InvoiceConfigID', referencedColumnName: 'invoiceConfigId' },
  ])
  invoiceConfig!: InvoiceConfig;
}
