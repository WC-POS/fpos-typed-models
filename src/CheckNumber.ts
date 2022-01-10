import { Column, Entity, Index } from 'typeorm';

@Index('IX_CheckNumber', ['storeId'], {})
@Index('PK_NextSaleNumber', ['nextSaleId'], { unique: true })
@Entity('CheckNumber', { schema: 'dbo' })
export class CheckNumber {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'NextSaleID',
    default: () => 'newsequentialid()',
  })
  nextSaleId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'SaleNumber', default: () => '(0)' })
  saleNumber!: number;

  @Column('int', { name: 'TicketNumber', default: () => '(1)' })
  ticketNumber!: number;

  @Column('datetime', { name: 'TicketNumberLastUpdate', nullable: true })
  ticketNumberLastUpdate!: Date | null;
}
