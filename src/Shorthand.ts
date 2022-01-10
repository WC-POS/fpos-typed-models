import { Column, Entity, Index } from 'typeorm';

@Index('PK_Shorthand', ['shorthandId'], { unique: true })
@Entity('Shorthand', { schema: 'dbo' })
export class Shorthand {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ShorthandID',
    default: () => 'newsequentialid()',
  })
  shorthandId!: string;

  @Column('nvarchar', { name: 'ShortCode', length: 32 })
  shortCode!: string;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;

  @Column('nvarchar', { name: 'Modifiers', nullable: true })
  modifiers!: string | null;
}
