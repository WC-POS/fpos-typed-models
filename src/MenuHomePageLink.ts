import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { MenuPage } from './MenuPage';

@Index('PK_HomePageLink', ['homePageLinkId'], { unique: true })
@Entity('MenuHomePageLink', { schema: 'dbo' })
export class MenuHomePageLink {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'HomePageLinkID',
    default: () => 'newsequentialid()',
  })
  homePageLinkId!: string;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @ManyToOne(() => MenuPage, (menuPage) => menuPage.menuHomePageLinks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MenuPageID', referencedColumnName: 'menuPageId' }])
  menuPage!: MenuPage;
}
