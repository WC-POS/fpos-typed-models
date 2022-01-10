import { Column, Entity, Index } from 'typeorm';

@Index('PK_ReportTempData', ['tempStateId'], { unique: true })
@Entity('_ReportTempData', { schema: 'dbo' })
export class ReportTempData {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TempStateID',
    default: () => 'newsequentialid()',
  })
  tempStateId!: string;

  @Column('uniqueidentifier', { name: 'PermanentID' })
  permanentId!: string;

  @Column('varbinary', { name: 'ObjectStateBytes', nullable: true })
  objectStateBytes!: Buffer | null;

  @Column('datetime', { name: 'CreateStamp', default: () => 'getdate()' })
  createStamp!: Date;
}
