import { Column, Entity, Index } from 'typeorm';

@Index('PK_ReportWare', ['reportWareId'], { unique: true })
@Entity('ReportWare', { schema: 'dbo' })
export class ReportWare {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReportWareID',
    default: () => 'newsequentialid()',
  })
  reportWareId!: string;

  @Column('int', { name: 'Amount', default: () => '(0)' })
  amount!: number;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('nvarchar', { name: 'Item', length: 20, default: () => "''" })
  item!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
