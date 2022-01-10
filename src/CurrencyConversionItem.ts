import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CurrencyConversion } from './CurrencyConversion';

@Index('IX_CurrencyConversionItem', ['currencyConversionId'], {})
@Index('PK_CurrencyConversionItem', ['currencyConversionItemId'], {
  unique: true,
})
@Entity('CurrencyConversionItem', { schema: 'dbo' })
export class CurrencyConversionItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CurrencyConversionItemID',
    default: () => 'newsequentialid()',
  })
  currencyConversionItemId!: string;

  @Column('uniqueidentifier', { name: 'CurrencyConversionID' })
  currencyConversionId!: string;

  @Column('int', { name: 'ConversionIndex' })
  conversionIndex!: number;

  @Column('nvarchar', { name: 'ConversionName', length: 32 })
  conversionName!: string;

  @Column('nvarchar', { name: 'ConversionShortName', length: 4 })
  conversionShortName!: string;

  @Column('decimal', { name: 'ConversionRate', precision: 18, scale: 6 })
  conversionRate!: number;

  @ManyToOne(
    () => CurrencyConversion,
    (currencyConversion) => currencyConversion.currencyConversionItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    {
      name: 'CurrencyConversionID',
      referencedColumnName: 'currencyConversionId',
    },
  ])
  currencyConversion!: CurrencyConversion;
}
