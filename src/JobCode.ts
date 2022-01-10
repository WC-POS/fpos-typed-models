import { Column, Entity, Index, OneToMany } from 'typeorm';
import { JobCodeDeptMask } from './JobCodeDeptMask';

@Index('PK_JobCode', ['jobCodeId'], { unique: true })
@Entity('JobCode', { schema: 'dbo' })
export class JobCode {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'JobCodeID',
    default: () => 'newsequentialid()',
  })
  jobCodeId!: string;

  @Column('nvarchar', { name: 'Description', length: 20, default: () => "''" })
  description!: string;

  @Column('bit', { name: 'GetSharedTip', default: () => '(0)' })
  getSharedTip!: boolean;

  @Column('bit', { name: 'GiveSharedTip', default: () => '(0)' })
  giveSharedTip!: boolean;

  @Column('int', { name: 'Index', default: () => '(0)' })
  index!: number;

  @Column('bit', { name: 'IsDeliveryDriver', default: () => '(0)' })
  isDeliveryDriver!: boolean;

  @Column('nvarchar', { name: 'LaborGroup', default: () => "''" })
  laborGroup!: string;

  @Column('bit', { name: 'NoPromptForSeatOnModifier', default: () => '(0)' })
  noPromptForSeatOnModifier!: boolean;

  @Column('bit', { name: 'PromptForSeat', default: () => '(0)' })
  promptForSeat!: boolean;

  @Column('int', { name: 'RevenueCenter', default: () => '(0)' })
  revenueCenter!: number;

  @Column('int', { name: 'Section', default: () => '(0)' })
  section!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('int', { name: 'TipGetMethod', default: () => '(0)' })
  tipGetMethod!: number;

  @Column('int', { name: 'TipGiveIsMandatory', default: () => '(0)' })
  tipGiveIsMandatory!: number;

  @Column('int', { name: 'TipPercentageReceived', default: () => '(0)' })
  tipPercentageReceived!: number;

  @OneToMany(
    () => JobCodeDeptMask,
    (jobCodeDeptMask) => jobCodeDeptMask.jobCode
  )
  jobCodeDeptMasks!: JobCodeDeptMask[];
}
