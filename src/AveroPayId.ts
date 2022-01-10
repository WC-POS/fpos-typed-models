import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AveroPay__4F4A68524D39AE28', ['rowNum'], { unique: true })
@Entity('AveroPayID', { schema: 'dbo' })
export class AveroPayId {
  @PrimaryGeneratedColumn({ type: 'int', name: 'RowNum' })
  rowNum!: number;

  @Column('nvarchar', { name: 'MediaID', nullable: true, length: 40 })
  mediaId!: string | null;

  @Column('int', { name: 'MediaIndex', nullable: true })
  mediaIndex!: number | null;

  @Column('nvarchar', { name: 'MediaName', nullable: true, length: 20 })
  mediaName!: string | null;

  @Column('int', { name: 'Factor', nullable: true })
  factor!: number | null;

  @Column('int', { name: 'OldIndex', nullable: true })
  oldIndex!: number | null;

  @Column('int', { name: 'NewIndex', nullable: true })
  newIndex!: number | null;

  @Column('varchar', { name: 'UpdatedOn', nullable: true, length: 8 })
  updatedOn!: string | null;

  @Column('bit', { name: 'Active', nullable: true })
  active!: boolean | null;

  @Column('smallint', { name: 'SpecialOption', nullable: true })
  specialOption!: number | null;
}
