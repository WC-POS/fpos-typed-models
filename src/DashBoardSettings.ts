import { Column, Entity, Index } from 'typeorm';

@Index('PK_DashBoardSettings', ['dashBoardSettingsId'], { unique: true })
@Entity('DashBoardSettings', { schema: 'dbo' })
export class DashBoardSettings {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'DashBoardSettingsID',
    default: () => 'newsequentialid()',
  })
  dashBoardSettingsId!: string;

  @Column('nvarchar', {
    name: 'DashFieldName',
    length: 500,
    default: () => "''",
  })
  dashFieldName!: string;

  @Column('nvarchar', { name: 'DashFieldValue', default: () => "''" })
  dashFieldValue!: string;

  @Column('int', { name: 'IsActive' })
  isActive!: number;

  @Column('datetime', { name: 'CreateStamp', nullable: true })
  createStamp!: Date | null;

  @Column('datetime', { name: 'UpdateStamp', nullable: true })
  updateStamp!: Date | null;

  @Column('uniqueidentifier', { name: 'dashItemPanelID' })
  dashItemPanelId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;
}
