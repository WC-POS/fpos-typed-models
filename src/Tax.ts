import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TaxSchedule } from './TaxSchedule';
import { TaxTable } from './TaxTable';
import { TaxTranslation } from './TaxTranslation';

@Index('PK_Tax', ['taxId'], { unique: true })
@Entity('Tax', { schema: 'dbo' })
export class Tax {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TaxID',
    default: () => 'newsequentialid()',
  })
  taxId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('smallint', { name: 'TaxIndex' })
  taxIndex!: number;

  @Column('nvarchar', { name: 'TaxName', length: 64 })
  taxName!: string;

  @Column('smallint', { name: 'TaxType' })
  taxType!: number;

  @Column('bit', { name: 'IsVAT', default: () => '(0)' })
  isVat!: boolean;

  @Column('bit', { name: 'AddOddPennies' })
  addOddPennies!: boolean;

  @Column('int', { name: 'NoTaxUnder' })
  noTaxUnder!: number;

  @Column('smallint', { name: 'CalculationType' })
  calculationType!: number;

  @Column('int', { name: 'TaxPercent' })
  taxPercent!: number;

  @Column('smallint', { name: 'RoundingType' })
  roundingType!: number;

  @Column('smallint', { name: 'LastUpToIndex' })
  lastUpToIndex!: number;

  @Column('int', { name: 'ScheduledDays', default: () => '(0)' })
  scheduledDays!: number;

  @Column('bit', { name: 'DoNotIncludeInDisplayedTotal', default: () => '(0)' })
  doNotIncludeInDisplayedTotal!: boolean;

  @Column('bit', {
    name: 'IncludeInAlternateDisplayTotal',
    default: () => '(0)',
  })
  includeInAlternateDisplayTotal!: boolean;

  @Column('bit', {
    name: 'UseItemPriceForAlternateTotal',
    default: () => '(0)',
  })
  useItemPriceForAlternateTotal!: boolean;

  @Column('bit', {
    name: 'ForgiveAlternateTotalTaxOnSmartVat',
    default: () => '(0)',
  })
  forgiveAlternateTotalTaxOnSmartVat!: boolean;

  @Column('bit', { name: 'UseFloridaCalculation', default: () => '(0)' })
  useFloridaCalculation!: boolean;

  @OneToMany(() => TaxSchedule, (taxSchedule) => taxSchedule.tax)
  taxSchedules!: TaxSchedule[];

  @OneToMany(() => TaxTable, (taxTable) => taxTable.tax)
  taxTables!: TaxTable[];

  @OneToMany(() => TaxTranslation, (taxTranslation) => taxTranslation.tax)
  taxTranslations!: TaxTranslation[];
}
