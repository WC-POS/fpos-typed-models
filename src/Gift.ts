import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GiftHistory } from './GiftHistory';
import { GiftUsed } from './GiftUsed';

@Index('PK_Gift', ['giftId'], { unique: true })
@Entity('Gift', { schema: 'dbo' })
export class Gift {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GiftID',
    default: () => 'newsequentialid()',
  })
  giftId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('tinyint', { name: 'SeriesIndex' })
  seriesIndex!: number;

  @Column('nvarchar', { name: 'GiftNumber', length: 16 })
  giftNumber!: string;

  @Column('nvarchar', { name: 'Swipe', nullable: true, length: 48 })
  swipe!: string | null;

  @Column('nvarchar', { name: 'Prefix', nullable: true, length: 16 })
  prefix!: string | null;

  @Column('nvarchar', { name: 'Suffix', nullable: true, length: 16 })
  suffix!: string | null;

  @Column('datetime', { name: 'IssueDate' })
  issueDate!: Date;

  @Column('datetime', { name: 'ExpirationDate', nullable: true })
  expirationDate!: Date | null;

  @Column('datetime', { name: 'DestroyDate', nullable: true })
  destroyDate!: Date | null;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('nvarchar', { name: 'FromName', nullable: true, length: 50 })
  fromName!: string | null;

  @Column('nvarchar', { name: 'ToName', nullable: true, length: 50 })
  toName!: string | null;

  @Column('int', { name: 'CheckCount' })
  checkCount!: number;

  @Column('datetime', { name: 'LastUpdated', nullable: true })
  lastUpdated!: Date | null;

  @Column('nvarchar', { name: 'StoreNumber', nullable: true, length: 8 })
  storeNumber!: string | null;

  @Column('uniqueidentifier', {
    name: 'RegionID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  regionId!: string;

  @Column('int', { name: 'HistoryCount', default: () => '(0)' })
  historyCount!: number;

  @OneToMany(() => GiftHistory, (giftHistory) => giftHistory.gift)
  giftHistories!: GiftHistory[];

  @OneToMany(() => GiftUsed, (giftUsed) => giftUsed.gift)
  giftUseds!: GiftUsed[];
}
