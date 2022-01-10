import { Column, Entity, Index } from 'typeorm';

@Index('PK_Shift', ['shiftId'], { unique: true })
@Entity('Shift', { schema: 'dbo' })
export class Shift {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ShiftID',
    default: () => 'newsequentialid()',
  })
  shiftId!: string;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('smallint', { name: 'ShiftIndex' })
  shiftIndex!: number;

  @Column('bit', { name: 'IsActive', default: () => '(0)' })
  isActive!: boolean;

  @Column('nvarchar', { name: 'ShiftDescription', length: 32 })
  shiftDescription!: string;

  @Column('int', { name: 'WorkCenter' })
  workCenter!: number;

  @Column('int', { name: 'StartTime' })
  startTime!: number;

  @Column('int', { name: 'EndTime' })
  endTime!: number;
}
