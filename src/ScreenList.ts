import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Screen } from './Screen';

@Index('IX_ScreenList', ['screenId'], {})
@Index('PK_ScreenList', ['screenListId'], { unique: true })
@Entity('ScreenList', { schema: 'dbo' })
export class ScreenList {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ScreenListID',
    default: () => 'newsequentialid()',
  })
  screenListId!: string;

  @Column('uniqueidentifier', { name: 'ScreenID' })
  screenId!: string;

  @Column('int', { name: 'ScreenListIndex', default: () => '(0)' })
  screenListIndex!: number;

  @Column('int', { name: 'Left', default: () => '(0)' })
  left!: number;

  @Column('int', { name: 'Top', default: () => '(0)' })
  top!: number;

  @Column('int', { name: 'Right', default: () => '(0)' })
  right!: number;

  @Column('int', { name: 'Bottom', default: () => '(0)' })
  bottom!: number;

  @Column('smallint', { name: 'SortType', default: () => '(0)' })
  sortType!: number;

  @Column('smallint', { name: 'SortOrder', default: () => '(0)' })
  sortOrder!: number;

  @Column('int', { name: 'OpenCheckColumnCount', default: () => '(0)' })
  openCheckColumnCount!: number;

  @Column('smallint', { name: 'ChecksToShow', default: () => '(0)' })
  checksToShow!: number;

  @Column('smallint', { name: 'OrderType', default: () => '(0)' })
  orderType!: number;

  @Column('smallint', { name: 'UnassignedOnly', default: () => '(0)' })
  unassignedOnly!: number;

  @Column('int', { name: 'OpenCheckThreshold', default: () => '(0)' })
  openCheckThreshold!: number;

  @Column('tinyint', { name: 'RevenueCenter', default: () => '(0)' })
  revenueCenter!: number;

  @Column('smallint', { name: 'UseWebCustomer', default: () => '(0)' })
  useWebCustomer!: number;

  @Column('int', { name: 'ReceiptInformationHeader', default: () => '(0)' })
  receiptInformationHeader!: number;

  @Column('int', { name: 'ReceiptInformationFooter', default: () => '(0)' })
  receiptInformationFooter!: number;

  @ManyToOne(() => Screen, (screen) => screen.screenLists, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ScreenID', referencedColumnName: 'screenId' }])
  screen!: Screen;
}
