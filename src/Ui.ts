import { Column, Entity, Index, OneToMany } from 'typeorm';
import { UiColumn } from './UiColumn';

@Index('PK_UIs', ['uiid'], { unique: true })
@Index('UIName_Unique', ['name'], { unique: true })
@Entity('UI', { schema: 'dbo' })
export class Ui {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'UIID',
    default: () => 'newsequentialid()',
  })
  uiid!: string;

  @Column('nvarchar', { name: 'Name', unique: true, length: 50 })
  name!: string;

  @OneToMany(() => UiColumn, (uiColumn) => uiColumn.ui)
  uiColumns!: UiColumn[];
}
