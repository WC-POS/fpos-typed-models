import { Column, Entity, Index } from 'typeorm';

@Index('PK_TempState', ['tempStateId'], { unique: true })
@Entity('TempState', { schema: 'dbo' })
export class TempState {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TempStateID',
    default: () => 'newsequentialid()',
  })
  tempStateId!: string;

  @Column('uniqueidentifier', {
    name: 'PermanentID',
    default: () => 'newsequentialid()',
  })
  permanentId!: string;

  @Column('varbinary', { name: 'ObjectState', nullable: true })
  objectState!: Buffer | null;

  @Column('datetime', { name: 'CreateStamp', default: () => 'getdate()' })
  createStamp!: Date;
}
