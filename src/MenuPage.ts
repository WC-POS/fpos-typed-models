import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MenuHomePageLink } from './MenuHomePageLink';
import { MenuPageGroup } from './MenuPageGroup';

@Index('PK_MenuPage_1', ['menuPageId'], { unique: true })
@Entity('MenuPage', { schema: 'dbo' })
export class MenuPage {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MenuPageID',
    default: () => 'newsequentialid()',
  })
  menuPageId!: string;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('nvarchar', { name: 'PageName', length: 250 })
  pageName!: string;

  @Column('int', { name: 'SecLevel' })
  secLevel!: number;

  @Column('int', { name: 'IconIndex' })
  iconIndex!: number;

  @Column('int', { name: 'OrderIndex' })
  orderIndex!: number;

  @Column('int', { name: 'ButtonType' })
  buttonType!: number;

  @Column('int', { name: 'FunctionType' })
  functionType!: number;

  @Column('int', { name: 'TabParentFunctionType' })
  tabParentFunctionType!: number;

  @Column('nvarchar', { name: 'SavedXML', default: () => "''" })
  savedXml!: string;

  @Column('nvarchar', { name: 'AssignedUser', default: () => "''" })
  assignedUser!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @OneToMany(
    () => MenuHomePageLink,
    (menuHomePageLink) => menuHomePageLink.menuPage
  )
  menuHomePageLinks!: MenuHomePageLink[];

  @OneToMany(() => MenuPageGroup, (menuPageGroup) => menuPageGroup.menuPage)
  menuPageGroups!: MenuPageGroup[];
}
