import { Column, Entity, Index, OneToMany } from 'typeorm';
import { LaborRule } from './LaborRule';

@Index('PK_LaborRuleSet', ['laborRuleSetId'], { unique: true })
@Entity('LaborRuleSet', { schema: 'dbo' })
export class LaborRuleSet {
  @Column('uniqueidentifier', { primary: true, name: 'LaborRuleSetID' })
  laborRuleSetId!: string;

  @Column('uniqueidentifier', { name: 'LaborRuleGroupID' })
  laborRuleGroupId!: string;

  @Column('datetime', { name: 'EffectiveDate' })
  effectiveDate!: Date;

  @Column('bit', { name: 'UseRollingWorkday', default: () => '(0)' })
  useRollingWorkday!: boolean;

  @OneToMany(() => LaborRule, (laborRule) => laborRule.laborRuleSet)
  laborRules!: LaborRule[];
}
