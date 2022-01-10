import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DataGroup } from './DataGroup';
import { Store } from './Store';

@Index('PK__DataGrou__FC2D6E730CFBAAF0', ['dataGroupStoreId'], { unique: true })
@Entity('DataGroupStore', { schema: 'dbo' })
export class DataGroupStore {
  @Column('uniqueidentifier', { primary: true, name: 'DataGroupStoreID' })
  dataGroupStoreId!: string;

  @ManyToOne(() => DataGroup, (dataGroup) => dataGroup.dataGroupStores, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'DataGroupID', referencedColumnName: 'dataGroupId' }])
  dataGroup!: DataGroup;

  @ManyToOne(() => Store, (store) => store.dataGroupStores)
  @JoinColumn([{ name: 'StoreID', referencedColumnName: 'storeId' }])
  store!: Store;
}
