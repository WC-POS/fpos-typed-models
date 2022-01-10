import { Column, Entity, Index } from 'typeorm';

@Index('PK_PriceLevel', ['priceLevelId'], { unique: true })
@Entity('PriceLevel', { schema: 'dbo' })
export class PriceLevel {
  @Column('uniqueidentifier', { primary: true, name: 'PriceLevelID' })
  priceLevelId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'PriceLevelIndex' })
  priceLevelIndex!: number;

  @Column('nvarchar', { name: 'PriceLevelName', length: 50 })
  priceLevelName!: string;
}
