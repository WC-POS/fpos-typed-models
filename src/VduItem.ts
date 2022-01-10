import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Vdu } from './Vdu';

@Index('PK_VDUItem', ['vduItemId'], { unique: true })
@Entity('VDUItem', { schema: 'dbo' })
export class VduItem {
  @Column('uniqueidentifier', { primary: true, name: 'VDUItemID' })
  vduItemId!: string;

  @Column('int', { name: 'TransactionType', default: () => '(0)' })
  transactionType!: number;

  @Column('int', { name: 'BasePrice', default: () => '(0)' })
  basePrice!: number;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 20 })
  description!: string | null;

  @Column('smallint', { name: 'Quantity' })
  quantity!: number;

  @Column('bit', { name: 'IsModifier', default: () => '(0)' })
  isModifier!: boolean;

  @Column('int', { name: 'ParentIndex', default: () => '(0)' })
  parentIndex!: number;

  @Column('int', { name: 'ItemIndex', default: () => '(0)' })
  itemIndex!: number;

  @Column('nvarchar', { name: 'ItemName', nullable: true, length: 32 })
  itemName!: string | null;

  @Column('smallint', { name: 'Flags', default: () => '(0)' })
  flags!: number;

  @Column('int', { name: 'CourseFireDateOffset', default: () => '(0)' })
  courseFireDateOffset!: number;

  @Column('smallint', { name: 'CourseFireDelay', default: () => '(0)' })
  courseFireDelay!: number;

  @Column('uniqueidentifier', {
    name: 'SaleItemID',
    default: () => 'newsequentialid()',
  })
  saleItemId!: string;

  @Column('tinyint', { name: 'CourseNumber', default: () => '(0)' })
  courseNumber!: number;

  @Column('nvarchar', {
    name: 'Department',
    nullable: true,
    length: 10,
    default: () => '(0)',
  })
  department!: string | null;

  @ManyToOne(() => Vdu, (vdu) => vdu.vduItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'VDUID', referencedColumnName: 'vduid' }])
  vdu!: Vdu;
}
