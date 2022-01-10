import { Column, Entity, Index } from 'typeorm';

@Index('PK_MenuPageItem_1', ['menuPageItemId'], { unique: true })
@Entity('MenuPageItem', { schema: 'dbo' })
export class MenuPageItem {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MenuPageItemID',
    default: () => 'newsequentialid()',
  })
  menuPageItemId!: string;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('nvarchar', { name: 'ItemName', length: 450 })
  itemName!: string;

  @Column('nvarchar', { name: 'Executable', length: 2000 })
  executable!: string;

  @Column('int', { name: 'ExecutableType' })
  executableType!: number;

  @Column('nvarchar', {
    name: 'ClassColumnName',
    length: 50,
    default: () => "''",
  })
  classColumnName!: string;

  @Column('uniqueidentifier', { name: 'MenuPageGroupID' })
  menuPageGroupId!: string;

  @Column('int', { name: 'SecLevel' })
  secLevel!: number;

  @Column('int', { name: 'IconIndex' })
  iconIndex!: number;

  @Column('int', { name: 'OrderIndex' })
  orderIndex!: number;

  @Column('int', { name: 'DisplayMode', default: () => '(0)' })
  displayMode!: number;
}
