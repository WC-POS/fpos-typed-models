import { Column, Entity, Index } from 'typeorm';

@Index('PK_DinePointJobCode', ['jobCodeIndex'], { unique: true })
@Entity('DinePointJobCode', { schema: 'dbo' })
export class DinePointJobCode {
  @Column('int', { primary: true, name: 'JobCodeIndex' })
  jobCodeIndex!: number;

  @Column('int', { name: 'StoreID', default: () => '(0)' })
  storeId!: number;

  @Column('nvarchar', { name: 'JobCodeName', length: 50 })
  jobCodeName!: string;
}
