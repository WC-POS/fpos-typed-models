import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Special } from './Special';

@Index('IX_SpecialMonth', ['specialId'], {})
@Index('PK_SpecialMonth', ['specialMonthId'], { unique: true })
@Entity('SpecialMonth', { schema: 'dbo' })
export class SpecialMonth {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SpecialMonthID',
    default: () => 'newsequentialid()',
  })
  specialMonthId!: string;

  @Column('uniqueidentifier', { name: 'SpecialID' })
  specialId!: string;

  @Column('int', { name: 'SpecialMonthIndex' })
  specialMonthIndex!: number;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;

  @Column('bit', { name: 'ShowCountAvailable' })
  showCountAvailable!: boolean;

  @Column('int', { name: 'Price' })
  price!: number;

  @ManyToOne(() => Special, (special) => special.specialMonths, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SpecialID', referencedColumnName: 'specialId' }])
  special!: Special;
}
