import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeAvailability } from './EmployeeAvailability';

@Index('IX_EmployeeAvailabilityRange', ['employeeAvailabilityId'], {})
@Index('PK_EmployeeAvailabilityRange_1', ['employeeAvailabilityRangeId'], {
  unique: true,
})
@Entity('EmployeeAvailabilityRange', { schema: 'dbo' })
export class EmployeeAvailabilityRange {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'EmployeeAvailabilityRangeID',
    default: () => 'newsequentialid()',
  })
  employeeAvailabilityRangeId!: string;

  @Column('uniqueidentifier', { name: 'EmployeeAvailabilityID' })
  employeeAvailabilityId!: string;

  @Column('int', { name: 'RangeIndex' })
  rangeIndex!: number;

  @Column('nvarchar', { name: 'RangeDescription', length: 32 })
  rangeDescription!: string;

  @Column('tinyint', { name: 'RangeType' })
  rangeType!: number;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate!: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate!: Date | null;

  @ManyToOne(
    () => EmployeeAvailability,
    (employeeAvailability) => employeeAvailability.employeeAvailabilityRanges,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    {
      name: 'EmployeeAvailabilityID',
      referencedColumnName: 'employeeAvailabilityId',
    },
  ])
  employeeAvailability!: EmployeeAvailability;
}
