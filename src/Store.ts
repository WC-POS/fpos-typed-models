import { Column, Entity, Index, OneToMany } from 'typeorm';
import { DataGroupStore } from './DataGroupStore';

@Index('PK_Store_1', ['storeId'], { unique: true })
@Entity('Store', { schema: 'dbo' })
export class Store {
  @Column('int', { primary: true, name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'StoreName', length: 8 })
  storeName!: string;

  @Column('nvarchar', { name: 'StoreDescription', nullable: true, length: 32 })
  storeDescription!: string | null;

  @Column('uniqueidentifier', { name: 'RegionID', nullable: true })
  regionId!: string | null;

  @Column('varbinary', { name: 'SystemSettings', nullable: true })
  systemSettings!: Buffer | null;

  @Column('varbinary', { name: 'TerminalSettings', nullable: true })
  terminalSettings!: Buffer | null;

  @Column('int', { name: 'DatabaseVersion', default: () => '(0)' })
  databaseVersion!: number;

  @Column('int', { name: 'CodeVersion', default: () => '(0)' })
  codeVersion!: number;

  @Column('nvarchar', { name: 'APIKey', nullable: true, length: 200 })
  apiKey!: string | null;

  @Column('int', { name: 'InitEnterprise', default: () => '(0)' })
  initEnterprise!: number;

  @Column('int', { name: 'GuidNode', default: () => '(0)' })
  guidNode!: number;

  @OneToMany(() => DataGroupStore, (dataGroupStore) => dataGroupStore.store)
  dataGroupStores!: DataGroupStore[];
}
