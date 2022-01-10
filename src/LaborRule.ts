import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { LaborRuleSet } from './LaborRuleSet';

@Index('PK_LaborRule', ['laborRuleId'], { unique: true })
@Entity('LaborRule', { schema: 'dbo' })
export class LaborRule {
  @Column('uniqueidentifier', { primary: true, name: 'LaborRuleID' })
  laborRuleId!: string;

  @Column('int', { name: 'DayThreshold' })
  dayThreshold!: number;

  @Column('int', { name: 'HourThreshold' })
  hourThreshold!: number;

  @Column('int', { name: 'HourThresholdType' })
  hourThresholdType!: number;

  @Column('decimal', { name: 'Modifier', precision: 11, scale: 4 })
  modifier!: number;

  @Column('decimal', { name: 'RateCutoff', precision: 11, scale: 4 })
  rateCutoff!: number;

  @Column('bit', { name: 'UseDayThreshold' })
  useDayThreshold!: boolean;

  @Column('bit', { name: 'UseRateCutoff' })
  useRateCutoff!: boolean;

  @ManyToOne(() => LaborRuleSet, (laborRuleSet) => laborRuleSet.laborRules, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'LaborRuleSetID', referencedColumnName: 'laborRuleSetId' },
  ])
  laborRuleSet!: LaborRuleSet;
}
