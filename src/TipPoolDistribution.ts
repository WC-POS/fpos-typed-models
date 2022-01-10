import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TipPool } from './TipPool';

@Index('PK_TipPoolDistribution', ['tipPoolDistributionId'], { unique: true })
@Entity('TipPoolDistribution', { schema: 'dbo' })
export class TipPoolDistribution {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TipPoolDistributionID',
    default: () => 'newsequentialid()',
  })
  tipPoolDistributionId!: string;

  @Column('tinyint', { name: 'JobCode', default: () => '(0)' })
  jobCode!: number;

  @Column('tinyint', { name: 'DistributionType', default: () => '(0)' })
  distributionType!: number;

  @Column('smallint', { name: 'Percentage', default: () => '(0.0)' })
  percentage!: number;

  @ManyToOne(() => TipPool, (tipPool) => tipPool.tipPoolDistributions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'TipPoolID', referencedColumnName: 'tipPoolId' }])
  tipPool!: TipPool;
}
