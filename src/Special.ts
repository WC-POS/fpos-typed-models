import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SpecialMonth } from './SpecialMonth';
import { SpecialWeek } from './SpecialWeek';

@Index('PK_DailySpecial', ['specialId'], { unique: true })
@Entity('Special', { schema: 'dbo' })
export class Special {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SpecialID',
    default: () => 'newsequentialid()',
  })
  specialId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'SpecialIndex' })
  specialIndex!: number;

  @Column('nvarchar', { name: 'SpecialName', nullable: true, length: 32 })
  specialName!: string | null;

  @Column('smallint', { name: 'SpecialType' })
  specialType!: number;

  @OneToMany(() => SpecialMonth, (specialMonth) => specialMonth.special)
  specialMonths!: SpecialMonth[];

  @OneToMany(() => SpecialWeek, (specialWeek) => specialWeek.special)
  specialWeeks!: SpecialWeek[];
}
