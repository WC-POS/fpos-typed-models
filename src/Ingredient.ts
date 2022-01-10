import { Column, Entity, Index, OneToMany } from 'typeorm';
import { IngredientInventory } from './IngredientInventory';

@Index('PK_Ingredient', ['ingredientId'], { unique: true })
@Entity('Ingredient', { schema: 'dbo' })
export class Ingredient {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'IngredientID',
    default: () => 'newsequentialid()',
  })
  ingredientId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'IngredientName', length: 32 })
  ingredientName!: string;

  @Column('nvarchar', { name: 'IngredientDescription', length: 32 })
  ingredientDescription!: string;

  @Column('nvarchar', { name: 'Vendor', length: 20 })
  vendor!: string;

  @Column('tinyint', { name: 'MeasureType' })
  measureType!: number;

  @Column('int', { name: 'UnitsInPackage' })
  unitsInPackage!: number;

  @Column('int', { name: 'PackagesInCase' })
  packagesInCase!: number;

  @Column('int', { name: 'CostPerUnit' })
  costPerUnit!: number;

  @Column('int', { name: 'ReorderUnitAt' })
  reorderUnitAt!: number;

  @Column('int', { name: 'ReorderPackageAt' })
  reorderPackageAt!: number;

  @Column('int', { name: 'ReorderCaseAt' })
  reorderCaseAt!: number;

  @Column('int', { name: 'ReorderUnitQuantity' })
  reorderUnitQuantity!: number;

  @Column('int', { name: 'ReorderPackageQuantity' })
  reorderPackageQuantity!: number;

  @Column('int', { name: 'ReorderCaseQuantity' })
  reorderCaseQuantity!: number;

  @Column('nvarchar', { name: 'CaseName', nullable: true, length: 12 })
  caseName!: string | null;

  @Column('nvarchar', { name: 'PackageName', nullable: true, length: 12 })
  packageName!: string | null;

  @Column('nvarchar', { name: 'Department', length: 10 })
  department!: string;

  @Column('int', { name: 'RetailPerUnit', default: () => '(0)' })
  retailPerUnit!: number;

  @OneToMany(
    () => IngredientInventory,
    (ingredientInventory) => ingredientInventory.ingredient
  )
  ingredientInventories!: IngredientInventory[];
}
