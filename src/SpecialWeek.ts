import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Special } from './Special';

@Index('IX_SpecialWeek', ['specialId'], {})
@Index('PK_SpecialWeek', ['specialWeekId'], { unique: true })
@Entity('SpecialWeek', { schema: 'dbo' })
export class SpecialWeek {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SpecialWeekID',
    default: () => 'newsequentialid()',
  })
  specialWeekId!: string;

  @Column('uniqueidentifier', { name: 'SpecialID' })
  specialId!: string;

  @Column('int', { name: 'SpecialWeekIndex' })
  specialWeekIndex!: number;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;

  @Column('bit', { name: 'ShowCountAvailable' })
  showCountAvailable!: boolean;

  @Column('int', { name: 'Price' })
  price!: number;

  @ManyToOne(() => Special, (special) => special.specialWeeks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SpecialID', referencedColumnName: 'specialId' }])
  special!: Special;
}
