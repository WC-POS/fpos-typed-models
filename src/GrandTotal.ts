import { Column, Entity, Index } from 'typeorm';

@Index('PK_GrandTotal', ['grandTotalId'], { unique: true })
@Entity('GrandTotal', { schema: 'dbo' })
export class GrandTotal {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GrandTotalID',
    default: () => 'newsequentialid()',
  })
  grandTotalId!: string;

  @Column('bigint', { name: 'Total', default: () => '(0)' })
  total!: string;

  @Column('datetime', { name: 'LastUpdate', default: () => 'getdate()' })
  lastUpdate!: Date;

  @Column('smallint', { name: 'TerminalNumber', default: () => '(-1)' })
  terminalNumber!: number;
}
