import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Ingredient } from './Ingredient';

@Index('IX_IngredientInventory', ['ingredientId'], {})
@Index('PK_IngredientInventory', ['ingredientInventoryId'], { unique: true })
@Entity('IngredientInventory', { schema: 'dbo' })
export class IngredientInventory {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'IngredientInventoryID',
    default: () => 'newsequentialid()',
  })
  ingredientInventoryId!: string;

  @Column('int', { name: 'IngredientInventoryIndex' })
  ingredientInventoryIndex!: number;

  @Column('uniqueidentifier', { name: 'IngredientID' })
  ingredientId!: string;

  @Column('nvarchar', { name: 'Location', length: 20 })
  location!: string;

  @Column('int', { name: 'UnitCount' })
  unitCount!: number;

  @Column('int', { name: 'PackageCount' })
  packageCount!: number;

  @Column('int', { name: 'CaseCount' })
  caseCount!: number;

  @ManyToOne(
    () => Ingredient,
    (ingredient) => ingredient.ingredientInventories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'IngredientID', referencedColumnName: 'ingredientId' }])
  ingredient!: Ingredient;
}
