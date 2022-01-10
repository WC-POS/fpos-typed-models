import { Column, Entity, Index } from 'typeorm';

@Index('IX_ItemDay', ['itemId'], {})
@Index('PK_ItemDay', ['itemDayId'], { unique: true })
@Entity('ItemDay', { schema: 'dbo' })
export class ItemDay {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemDayID',
    default: () => 'newsequentialid()',
  })
  itemDayId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('uniqueidentifier', { name: 'DepartmentID' })
  departmentId!: string;

  @Column('datetime', { name: 'Date' })
  date!: Date;
}
