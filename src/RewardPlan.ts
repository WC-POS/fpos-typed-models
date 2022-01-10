import { Column, Entity, Index, OneToMany } from 'typeorm';
import { RewardPlanLevel } from './RewardPlanLevel';

@Index('PK_Reward', ['rewardPlanId'], { unique: true })
@Entity('RewardPlan', { schema: 'dbo' })
export class RewardPlan {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'RewardPlanID',
    default: () => 'newsequentialid()',
  })
  rewardPlanId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'RewardIndex' })
  rewardIndex!: number;

  @Column('nvarchar', { name: 'RewardPlanName', length: 20 })
  rewardPlanName!: string;

  @Column('int', { name: 'LevelCount', default: () => '(0)' })
  levelCount!: number;

  @Column('bit', { name: 'NoRewardMessage', default: () => '(0)' })
  noRewardMessage!: boolean;

  @OneToMany(
    () => RewardPlanLevel,
    (rewardPlanLevel) => rewardPlanLevel.rewardPlan
  )
  rewardPlanLevels!: RewardPlanLevel[];
}
