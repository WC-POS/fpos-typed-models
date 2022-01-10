import { Column, Entity, Index } from 'typeorm';

@Index('IX__HourOfDay_Hour', ['hour'], {})
@Index('PK__HourOfDay', ['hour'], { unique: true })
@Entity('_HourOfDay', { schema: 'dbo' })
export class HourOfDay {
  @Column('smallint', { primary: true, name: 'Hour' })
  hour!: number;
}
