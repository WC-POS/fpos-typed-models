import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MenuPage } from './MenuPage';

@Index('PK_MenuPageGroup_1', ['menuPageGroupId'], { unique: true })
@Entity('MenuPageGroup', { schema: 'dbo' })
export class MenuPageGroup {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MenuPageGroupID',
    default: () => 'newsequentialid()',
  })
  menuPageGroupId!: string;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('nvarchar', { name: 'GroupName', length: 450 })
  groupName!: string;

  @Column('int', { name: 'GroupFunctionType' })
  groupFunctionType!: number;

  @Column('int', { name: 'ParentMenuPageGroupID' })
  parentMenuPageGroupId!: number;

  @Column('int', { name: 'SecLevel' })
  secLevel!: number;

  @Column('int', { name: 'OrderIndex' })
  orderIndex!: number;

  @Column('int', { name: 'DisplayMode', default: () => '(0)' })
  displayMode!: number;

  @ManyToOne(() => MenuPage, (menuPage) => menuPage.menuPageGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MenuPageID', referencedColumnName: 'menuPageId' }])
  menuPage!: MenuPage;
}
