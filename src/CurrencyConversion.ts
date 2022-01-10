import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CurrencyConversionItem } from './CurrencyConversionItem';

@Index('PK_CurrencyConversion', ['currencyConversionId'], { unique: true })
@Entity('CurrencyConversion', { schema: 'dbo' })
export class CurrencyConversion {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'CurrencyConversionID',
    default: () => 'newsequentialid()',
  })
  currencyConversionId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'ConversionBaseName', length: 32 })
  conversionBaseName!: string;

  @Column('nvarchar', { name: 'ConversionBaseShortName', length: 4 })
  conversionBaseShortName!: string;

  @OneToMany(
    () => CurrencyConversionItem,
    (currencyConversionItem) => currencyConversionItem.currencyConversion
  )
  currencyConversionItems!: CurrencyConversionItem[];
}
