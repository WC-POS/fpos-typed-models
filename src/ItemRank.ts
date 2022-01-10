import { Column, Entity, Index } from 'typeorm';

@Index('PK_ItemRank', ['itemRankId'], { unique: true })
@Entity('ItemRank', { schema: 'dbo' })
export class ItemRank {
  @Column('uniqueidentifier', { primary: true, name: 'ItemRankID' })
  itemRankId!: string;

  @Column('uniqueidentifier', { name: 'ItemID' })
  itemId!: string;

  @Column('int', { name: 'Rank' })
  rank!: number;
}
