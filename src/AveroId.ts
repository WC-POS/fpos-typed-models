import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AveroID__3214EC27FC51CA9C', ['id'], { unique: true })
@Entity('AveroID', { schema: 'dbo' })
export class AveroId {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id!: number;

  @Column('nvarchar', { name: 'name', nullable: true, length: 50 })
  name!: string | null;
}
