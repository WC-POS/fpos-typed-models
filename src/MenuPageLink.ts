import { Column, Entity, Index } from 'typeorm';

@Index('PK_MenuPageLink', ['menuPageLinkId'], { unique: true })
@Entity('MenuPageLink', { schema: 'dbo' })
export class MenuPageLink {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MenuPageLinkID',
    default: () => 'newsequentialid()',
  })
  menuPageLinkId!: string;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('uniqueidentifier', { name: 'MenuPageItemID' })
  menuPageItemId!: string;

  @Column('uniqueidentifier', { name: 'MenuPageGroupID' })
  menuPageGroupId!: string;

  @Column('int', { name: 'OrderIndex' })
  orderIndex!: number;

  @Column('nvarchar', { name: 'Notes', length: 1000 })
  notes!: string;

  @Column('nvarchar', { name: 'NameReplace', length: 250 })
  nameReplace!: string;
}
