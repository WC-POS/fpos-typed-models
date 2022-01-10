import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ItemIngredient } from './ItemIngredient';
import { ItemMobileExclusion } from './ItemMobileExclusion';
import { ItemModifier } from './ItemModifier';
import { ItemPrice } from './ItemPrice';
import { ItemPrinter } from './ItemPrinter';
import { ItemTranslation } from './ItemTranslation';

@Index('IX_Item', ['itemName', 'regionId'], { unique: true })
@Index('PK_Item', ['itemId'], { unique: true })
@Entity('Item', { schema: 'dbo' })
export class Item {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ItemID',
    default: () => 'newsequentialid()',
  })
  itemId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'ItemName', length: 32 })
  itemName!: string;

  @Column('nvarchar', { name: 'ItemDescription', length: 30 })
  itemDescription!: string;

  @Column('nvarchar', { name: 'Department', length: 10 })
  department!: string;

  @Column('nvarchar', { name: 'UPC', length: 32 })
  upc!: string;

  @Column('nvarchar', { name: 'ReceiptDesc', nullable: true, length: 20 })
  receiptDesc!: string | null;

  @Column('bit', { name: 'PrintDoubleWide' })
  printDoubleWide!: boolean;

  @Column('bit', { name: 'PrintAltColor' })
  printAltColor!: boolean;

  @Column('smallint', { name: 'ItemCount', default: () => '(-1)' })
  itemCount!: number;

  @Column('nvarchar', { name: 'AlternateItem', length: 32 })
  alternateItem!: string;

  @Column('smallint', { name: 'FireDelay' })
  fireDelay!: number;

  @Column('bit', { name: 'IsModifier' })
  isModifier!: boolean;

  @Column('tinyint', { name: 'OrderPriority' })
  orderPriority!: number;

  @Column('bit', { name: 'IsStoreChargeable' })
  isStoreChargeable!: boolean;

  @Column('bit', { name: 'AskForPrice' })
  askForPrice!: boolean;

  @Column('bit', { name: 'TogoSurcharge' })
  togoSurcharge!: boolean;

  @Column('int', { name: 'ItemCost' })
  itemCost!: number;

  @Column('bit', { name: 'IsScaleable' })
  isScaleable!: boolean;

  @Column('bit', { name: 'IsNotTippable' })
  isNotTippable!: boolean;

  @Column('tinyint', { name: 'PriceIsNegative' })
  priceIsNegative!: number;

  @Column('bit', { name: 'IsPromoItem' })
  isPromoItem!: boolean;

  @Column('int', { name: 'BergPLU' })
  bergPlu!: number;

  @Column('bit', { name: 'ModifierFollowsParent' })
  modifierFollowsParent!: boolean;

  @Column('nvarchar', {
    name: 'ModifierDescription',
    nullable: true,
    length: 30,
  })
  modifierDescription!: string | null;

  @Column('bit', { name: 'UseModifierMaxSelect' })
  useModifierMaxSelect!: boolean;

  @Column('smallint', { name: 'ModifierMaxSelect' })
  modifierMaxSelect!: number;

  @Column('bit', { name: 'UseModifierMinSelect' })
  useModifierMinSelect!: boolean;

  @Column('smallint', { name: 'ModifierMinSelect' })
  modifierMinSelect!: number;

  @Column('bit', { name: 'AllowModifierMaxBypass' })
  allowModifierMaxBypass!: boolean;

  @Column('bit', { name: 'UsePizzaStyle' })
  usePizzaStyle!: boolean;

  @Column('bit', { name: 'IsTimedItem' })
  isTimedItem!: boolean;

  @Column('tinyint', { name: 'TimingIncrement' })
  timingIncrement!: number;

  @Column('int', { name: 'MinimumPrice' })
  minimumPrice!: number;

  @Column('tinyint', { name: 'VDUColor' })
  vduColor!: number;

  @Column('nvarchar', { name: 'ShortDescription', nullable: true, length: 5 })
  shortDescription!: string | null;

  @Column('tinyint', { name: 'DefaultCourse' })
  defaultCourse!: number;

  @Column('int', { name: 'ChineseOutput' })
  chineseOutput!: number;

  @Column('int', { name: 'TripleHigh' })
  tripleHigh!: number;

  @Column('int', { name: 'QuadHigh' })
  quadHigh!: number;

  @Column('binary', { name: 'DiscountFlags', length: 13 })
  discountFlags!: Buffer;

  @Column('tinyint', { name: 'TaxFlags' })
  taxFlags!: number;

  @Column('tinyint', { name: 'PrintOptions' })
  printOptions!: number;

  @Column('int', { name: 'RemotePrinters' })
  remotePrinters!: number;

  @Column('bit', { name: 'AllowZeroPrice', default: () => '(0)' })
  allowZeroPrice!: boolean;

  @Column('int', { name: 'ModifierPriceLevel', default: () => '(0)' })
  modifierPriceLevel!: number;

  @Column('int', { name: 'ModifierCount', default: () => '(0)' })
  modifierCount!: number;

  @Column('int', { name: 'IngredientCount', default: () => '(0)' })
  ingredientCount!: number;

  @Column('int', { name: 'PrepTime', default: () => '(0)' })
  prepTime!: number;

  @Column('bit', { name: 'MultModPrice', default: () => '(0)' })
  multModPrice!: boolean;

  @Column('int', { name: 'MultAmount', default: () => '(0)' })
  multAmount!: number;

  @Column('bit', { name: 'MultRound', default: () => '(0)' })
  multRound!: boolean;

  @Column('bit', { name: 'IsNotGratable', default: () => '(0)' })
  isNotGratable!: boolean;

  @Column('int', { name: 'ModifierSortType', default: () => '(0)' })
  modifierSortType!: number;

  @Column('bit', { name: 'IsUsedOnline', default: () => '(0)' })
  isUsedOnline!: boolean;

  @Column('nvarchar', { name: 'WebTitle', nullable: true, length: 30 })
  webTitle!: string | null;

  @Column('nvarchar', { name: 'WebDescription', nullable: true })
  webDescription!: string | null;

  @Column('nvarchar', { name: 'WebThumbPath', nullable: true, length: 254 })
  webThumbPath!: string | null;

  @Column('nvarchar', { name: 'WebImagePath', nullable: true, length: 254 })
  webImagePath!: string | null;

  @Column('int', { name: 'DisplayIndex', default: () => '(0)' })
  displayIndex!: number;

  @Column('int', { name: 'ModDisplayOrder', default: () => '(0)' })
  modDisplayOrder!: number;

  @Column('int', { name: 'OverridePrice', default: () => '(0)' })
  overridePrice!: number;

  @Column('int', { name: 'SwappedDept', default: () => '(0)' })
  swappedDept!: number;

  @Column('int', { name: 'MaxSelectionAllowed', default: () => '(0)' })
  maxSelectionAllowed!: number;

  @Column('bit', { name: 'IsShippable', default: () => '(0)' })
  isShippable!: boolean;

  @Column('nvarchar', { name: 'ShipWidth', nullable: true, length: 5 })
  shipWidth!: string | null;

  @Column('nvarchar', { name: 'ShipHeight', nullable: true, length: 5 })
  shipHeight!: string | null;

  @Column('nvarchar', {
    name: 'ShipLength',
    nullable: true,
    length: 5,
    default: () => "N''",
  })
  shipLength!: string | null;

  @Column('bit', { name: 'AddPrepTimeToParent', default: () => '(0)' })
  addPrepTimeToParent!: boolean;

  @Column('int', { name: 'VDUID', default: () => '(0)' })
  vduid!: number;

  @Column('int', { name: 'HHColumnCount', default: () => '(0)' })
  hhColumnCount!: number;

  @Column('uniqueidentifier', { name: 'WebDepartmentID', nullable: true })
  webDepartmentId!: string | null;

  @Column('bit', { name: 'AskID', default: () => '(0)' })
  askId!: boolean;

  @Column('int', { name: 'QuantityMultiplier', default: () => '(0)' })
  quantityMultiplier!: number;

  @Column('bit', { name: 'IsModifierGroup', default: () => '(0)' })
  isModifierGroup!: boolean;

  @Column('tinyint', { name: 'ModifierPriceRounding', default: () => '(0)' })
  modifierPriceRounding!: number;

  @Column('bit', { name: 'MobileAskID', default: () => '(0)' })
  mobileAskId!: boolean;

  @Column('bit', { name: 'IsMobile', default: () => '(0)' })
  isMobile!: boolean;

  @Column('uniqueidentifier', { name: 'MobileMessageID', nullable: true })
  mobileMessageId!: string | null;

  @Column('nvarchar', {
    name: 'OverrideAutoMenuButtonSettingsGraphic',
    nullable: true,
    length: 50,
  })
  overrideAutoMenuButtonSettingsGraphic!: string | null;

  @Column('nvarchar', { name: 'AutoMenuText', nullable: true })
  autoMenuText!: string | null;

  @Column('datetime', { name: 'AutoMenuStartDate', nullable: true })
  autoMenuStartDate!: Date | null;

  @Column('datetime', { name: 'AutoMenuEndDate', nullable: true })
  autoMenuEndDate!: Date | null;

  @Column('tinyint', { name: 'ItemGrouping', default: () => '(0)' })
  itemGrouping!: number;

  @Column('bit', { name: 'IsRequired', default: () => '(0)' })
  isRequired!: boolean;

  @Column('nvarchar', {
    name: 'DisplayDescription',
    nullable: true,
    length: 140,
  })
  displayDescription!: string | null;

  @Column('uniqueidentifier', { name: 'ParentItemID', nullable: true })
  parentItemId!: string | null;

  @Column('uniqueidentifier', { name: 'ItemSizeID', nullable: true })
  itemSizeId!: string | null;

  @Column('nvarchar', { name: 'ImageName', nullable: true, length: 20 })
  imageName!: string | null;

  @Column('nvarchar', { name: 'BannerImageName', nullable: true, length: 20 })
  bannerImageName!: string | null;

  @Column('nvarchar', {
    name: 'BannerFooterImageName',
    nullable: true,
    length: 20,
  })
  bannerFooterImageName!: string | null;

  @Column('smallint', {
    name: 'ModifierHeaderDisplayType',
    default: () => '(0)',
  })
  modifierHeaderDisplayType!: number;

  @Column('smallint', {
    name: 'ModifierFooterDisplayType',
    default: () => '(0)',
  })
  modifierFooterDisplayType!: number;

  @Column('bit', { name: 'ShowOnKiosk', default: () => '(0)' })
  showOnKiosk!: boolean;

  @Column('bit', { name: 'AllowEBT', default: () => '(0)' })
  allowEbt!: boolean;

  @Column('nvarchar', {
    name: 'ModBannerFooterSelectDesc',
    nullable: true,
    length: 100,
  })
  modBannerFooterSelectDesc!: string | null;

  @Column('bit', { name: 'HideSkyTab', default: () => '(0)' })
  hideSkyTab!: boolean;

  @OneToMany(() => ItemIngredient, (itemIngredient) => itemIngredient.item)
  itemIngredients!: ItemIngredient[];

  @OneToMany(
    () => ItemMobileExclusion,
    (itemMobileExclusion) => itemMobileExclusion.item
  )
  itemMobileExclusions!: ItemMobileExclusion[];

  @OneToMany(() => ItemModifier, (itemModifier) => itemModifier.item)
  itemModifiers!: ItemModifier[];

  @OneToMany(() => ItemPrice, (itemPrice) => itemPrice.item)
  itemPrices!: ItemPrice[];

  @OneToMany(() => ItemPrinter, (itemPrinter) => itemPrinter.item)
  itemPrinters!: ItemPrinter[];

  @OneToMany(() => ItemTranslation, (itemTranslation) => itemTranslation.item)
  itemTranslations!: ItemTranslation[];
}
