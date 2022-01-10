import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { RewardPlan } from './RewardPlan';

@Index('IX_RewardPlanLevel', ['rewardPlanId'], {})
@Index('PK_RewardPlanLevel', ['rewardPlanLevelId'], { unique: true })
@Entity('RewardPlanLevel', { schema: 'dbo' })
export class RewardPlanLevel {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'RewardPlanLevelID',
    default: () => 'newsequentialid()',
  })
  rewardPlanLevelId!: string;

  @Column('uniqueidentifier', { name: 'RewardPlanID' })
  rewardPlanId!: string;

  @Column('int', { name: 'LevelIndex' })
  levelIndex!: number;

  @Column('smallint', { name: 'BonusMethod' })
  bonusMethod!: number;

  @Column('int', { name: 'VisitCount' })
  visitCount!: number;

  @Column('int', { name: 'DollarsSpent' })
  dollarsSpent!: number;

  @Column('int', { name: 'ItemsPurchased' })
  itemsPurchased!: number;

  @Column('smallint', { name: 'RepeatCount' })
  repeatCount!: number;

  @Column('smallint', { name: 'RewardType' })
  rewardType!: number;

  @Column('smallint', { name: 'CouponIndex' })
  couponIndex!: number;

  @Column('smallint', { name: 'DiscountIndex' })
  discountIndex!: number;

  @Column('smallint', { name: 'GiftSeriesIndex' })
  giftSeriesIndex!: number;

  @Column('int', { name: 'GiftAmount' })
  giftAmount!: number;

  @Column('smallint', { name: 'GiftPrintOptions' })
  giftPrintOptions!: number;

  @Column('nvarchar', { name: 'ItemMask', nullable: true, length: 32 })
  itemMask!: string | null;

  @Column('nvarchar', {
    name: 'SkipDepartmentMask',
    nullable: true,
    length: 50,
  })
  skipDepartmentMask!: string | null;

  @Column('int', { name: 'HoursCount' })
  hoursCount!: number;

  @Column('int', { name: 'CreditAmount', default: () => '(0)' })
  creditAmount!: number;

  @ManyToOne(() => RewardPlan, (rewardPlan) => rewardPlan.rewardPlanLevels, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'RewardPlanID', referencedColumnName: 'rewardPlanId' }])
  rewardPlan!: RewardPlan;
}
