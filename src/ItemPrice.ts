import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Index('IX_ItemPrice', ['itemId'], {})
@Index('PK_ItemPriceSchedule', ['itemPriceId'], { unique: true })
@Entity('ItemPrice', { schema: 'dbo' })
export class ItemPrice {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemPriceID',
    default: () => 'newsequentialid()',
  })
  itemPriceId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('int', { name: 'ScheduleIndex', default: () => '(0)' })
  scheduleIndex!: number;

  @Column('int', { name: 'DefaultPrice', default: () => '(0)' })
  defaultPrice!: number;

  @Column('int', { name: 'Level1Price', default: () => '(0)' })
  level1Price!: number;

  @Column('int', { name: 'Level2Price', default: () => '(0)' })
  level2Price!: number;

  @Column('int', { name: 'Level3Price', default: () => '(0)' })
  level3Price!: number;

  @Column('int', { name: 'Level4Price', default: () => '(0)' })
  level4Price!: number;

  @Column('int', { name: 'Level5Price', default: () => '(0)' })
  level5Price!: number;

  @Column('int', { name: 'Level6Price', default: () => '(0)' })
  level6Price!: number;

  @Column('int', { name: 'Level7Price', default: () => '(0)' })
  level7Price!: number;

  @Column('int', { name: 'Level8Price', default: () => '(0)' })
  level8Price!: number;

  @Column('int', { name: 'Level9Price', default: () => '(0)' })
  level9Price!: number;

  @Column('int', { name: 'Level10Price', default: () => '(0)' })
  level10Price!: number;

  @Column('int', { name: 'Level11Price', default: () => '(0)' })
  level11Price!: number;

  @Column('int', { name: 'Level12Price', default: () => '(0)' })
  level12Price!: number;

  @Column('int', { name: 'Level13Price', default: () => '(0)' })
  level13Price!: number;

  @Column('int', { name: 'Level14Price', default: () => '(0)' })
  level14Price!: number;

  @Column('int', { name: 'Level15Price', default: () => '(0)' })
  level15Price!: number;

  @Column('int', { name: 'Level16Price', default: () => '(0)' })
  level16Price!: number;

  @Column('int', { name: 'Level17Price', default: () => '(0)' })
  level17Price!: number;

  @Column('int', { name: 'Level18Price', default: () => '(0)' })
  level18Price!: number;

  @Column('int', { name: 'Level19Price', default: () => '(0)' })
  level19Price!: number;

  @Column('int', { name: 'Level20Price', default: () => '(0)' })
  level20Price!: number;

  @Column('int', { name: 'Level21Price', default: () => '(0)' })
  level21Price!: number;

  @Column('int', { name: 'Level22Price', default: () => '(0)' })
  level22Price!: number;

  @Column('int', { name: 'Level23Price', default: () => '(0)' })
  level23Price!: number;

  @Column('int', { name: 'Level24Price', default: () => '(0)' })
  level24Price!: number;

  @Column('int', { name: 'Level25Price', default: () => '(0)' })
  level25Price!: number;

  @Column('int', { name: 'Level26Price', default: () => '(0)' })
  level26Price!: number;

  @Column('int', { name: 'Level27Price', default: () => '(0)' })
  level27Price!: number;

  @Column('int', { name: 'Level28Price', default: () => '(0)' })
  level28Price!: number;

  @Column('int', { name: 'Level29Price', default: () => '(0)' })
  level29Price!: number;

  @ManyToOne(() => Item, (item) => item.itemPrices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ItemID', referencedColumnName: 'itemId' }])
  item!: Item;
}
