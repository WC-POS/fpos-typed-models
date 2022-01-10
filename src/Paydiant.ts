import { Column, Entity, Index } from 'typeorm';

@Index('PK_Paydiant', ['paydiantId'], { unique: true })
@Entity('Paydiant', { schema: 'dbo' })
export class Paydiant {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'PaydiantID',
    default: () => 'newsequentialid()',
  })
  paydiantId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', {
    name: 'StoreLocationID',
    length: 255,
    default: () => "''",
  })
  storeLocationId!: string;

  @Column('nvarchar', {
    name: 'WebServiceURL',
    length: 255,
    default: () => "''",
  })
  webServiceUrl!: string;

  @Column('nvarchar', { name: 'MerchantID', length: 100 })
  merchantId!: string;

  @Column('nvarchar', { name: 'TerminalID', length: 8, default: () => "''" })
  terminalId!: string;

  @Column('nvarchar', { name: 'GatewayURL', length: 255, default: () => "''" })
  gatewayUrl!: string;

  @Column('binary', { name: 'MerchantKey', length: 264 })
  merchantKey!: Buffer;

  @Column('int', { name: 'OfferMediaIndex', default: () => '(0)' })
  offerMediaIndex!: number;
}
