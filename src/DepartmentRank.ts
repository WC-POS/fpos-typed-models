import { Column, Entity, Index } from 'typeorm';

@Index('PK_DepartmentRank', ['departmentRankId'], { unique: true })
@Entity('DepartmentRank', { schema: 'dbo' })
export class DepartmentRank {
  @Column('uniqueidentifier', { primary: true, name: 'DepartmentRankID' })
  departmentRankId!: string;

  @Column('uniqueidentifier', { name: 'DepartmentID' })
  departmentId!: string;

  @Column('int', { name: 'Rank' })
  rank!: number;
}
