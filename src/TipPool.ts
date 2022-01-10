import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TipPoolContribution } from './TipPoolContribution';
import { TipPoolDistribution } from './TipPoolDistribution';

@Index('PK_TipPool', ['tipPoolId'], { unique: true })
@Entity('TipPool', { schema: 'dbo' })
export class TipPool {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TipPoolID',
    default: () => 'newsequentialid()',
  })
  tipPoolId!: string;

  @Column('nvarchar', { name: 'TipPoolName', nullable: true, length: 255 })
  tipPoolName!: string | null;

  @Column('smallint', { name: 'StartTimeInMinutes', nullable: true })
  startTimeInMinutes!: number | null;

  @Column('smallint', { name: 'EndTimeInMinutes', nullable: true })
  endTimeInMinutes!: number | null;

  @Column('tinyint', { name: 'OverrideDistributionType', nullable: true })
  overrideDistributionType!: number | null;

  @Column('tinyint', { name: 'Days', default: () => '0xFF' })
  days!: number;

  @OneToMany(
    () => TipPoolContribution,
    (tipPoolContribution) => tipPoolContribution.tipPool
  )
  tipPoolContributions!: TipPoolContribution[];

  @OneToMany(
    () => TipPoolDistribution,
    (tipPoolDistribution) => tipPoolDistribution.tipPool
  )
  tipPoolDistributions!: TipPoolDistribution[];
}
