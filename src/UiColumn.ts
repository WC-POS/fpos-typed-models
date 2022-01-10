import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Ui } from './Ui';

@Index('PK_UIColumns', ['uiColumnId'], { unique: true })
@Entity('UIColumn', { schema: 'dbo' })
export class UiColumn {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'UIColumnID',
    default: () => 'newsequentialid()',
  })
  uiColumnId!: string;

  @Column('nvarchar', { name: 'Name', length: 50, default: () => "''" })
  name!: string;

  @Column('int', { name: 'Position', default: () => '(0)' })
  position!: number;

  @Column('int', { name: 'State', default: () => '(0)' })
  state!: number;

  @ManyToOne(() => Ui, (ui) => ui.uiColumns)
  @JoinColumn([{ name: 'UIID', referencedColumnName: 'uiid' }])
  ui!: Ui;
}
