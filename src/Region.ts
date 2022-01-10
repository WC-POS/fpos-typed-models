import { Column, Entity, Index } from 'typeorm';

@Index('PK_Region', ['regionId'], { unique: true })
@Entity('Region', { schema: 'dbo' })
export class Region {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'RegionID',
    default: () => 'newsequentialid()',
  })
  regionId!: string;

  @Column('nvarchar', { name: 'RegionName', length: 50 })
  regionName!: string;

  @Column('nvarchar', { name: 'RegionDescription', nullable: true, length: 32 })
  regionDescription!: string | null;

  @Column('nvarchar', { name: 'Area', length: 30 })
  area!: string;
}
