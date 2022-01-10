import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TipPool } from './TipPool';

@Index('PK_TipPoolContribution', ['tipPoolContributionId'], { unique: true })
@Entity('TipPoolContribution', { schema: 'dbo' })
export class TipPoolContribution {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TipPoolContributionID',
    default: () => 'newsequentialid()',
  })
  tipPoolContributionId!: string;

  @Column('tinyint', { name: 'JobCode', default: () => '(0)' })
  jobCode!: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 100 })
  name!: string | null;

  @Column('tinyint', { name: 'ContributionType', default: () => '(0)' })
  contributionType!: number;

  @Column('smallint', { name: 'Percentage', default: () => '(0.0)' })
  percentage!: number;

  @ManyToOne(() => TipPool, (tipPool) => tipPool.tipPoolContributions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'TipPoolID', referencedColumnName: 'tipPoolId' }])
  tipPool!: TipPool;
}
