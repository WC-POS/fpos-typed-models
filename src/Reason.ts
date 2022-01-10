import { Column, Entity, Index } from 'typeorm';

@Index('PK_Reason', ['reasonId'], { unique: true })
@Entity('Reason', { schema: 'dbo' })
export class Reason {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReasonID',
    default: () => 'newsequentialid()',
  })
  reasonId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'ReasonType' })
  reasonType!: number;

  @Column('int', { name: 'ReasonIndex' })
  reasonIndex!: number;

  @Column('nvarchar', { name: 'ReasonName', length: 32 })
  reasonName!: string;
}
