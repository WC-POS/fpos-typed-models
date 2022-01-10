import { Column, Entity, Index } from 'typeorm';

@Index('PK_Recipe', ['recipeId'], { unique: true })
@Entity('Recipe', { schema: 'dbo' })
export class Recipe {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'RecipeID',
    default: () => 'newsequentialid()',
  })
  recipeId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'RecipeName', length: 32 })
  recipeName!: string;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;

  @Column('nvarchar', { name: 'Recipe', length: 1000 })
  recipe!: string;
}
