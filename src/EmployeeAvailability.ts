import { Column, Entity, Index, OneToMany } from 'typeorm';
import { EmployeeAvailabilityRange } from './EmployeeAvailabilityRange';

@Index('IX_EmployeeAvailability', ['empId', 'storeId'], {})
@Index('PK_EmployeeAvailabeWeekly', ['employeeAvailabilityId'], {
  unique: true,
})
@Entity('EmployeeAvailability', { schema: 'dbo' })
export class EmployeeAvailability {
  @Column('uniqueidentifier', { primary: true, name: 'EmployeeAvailabilityID' })
  employeeAvailabilityId!: string;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('binary', { name: 'Weekly', nullable: true, length: 336 })
  weekly!: Buffer | null;

  @Column('int', { name: 'RangeUsed', default: () => '(0)' })
  rangeUsed!: number;

  @OneToMany(
    () => EmployeeAvailabilityRange,
    (employeeAvailabilityRange) =>
      employeeAvailabilityRange.employeeAvailability
  )
  employeeAvailabilityRanges!: EmployeeAvailabilityRange[];
}
