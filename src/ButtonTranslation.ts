import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Button } from './Button';

@Index('PK_ButtonTranslation', ['buttonTranslationId'], { unique: true })
@Entity('ButtonTranslation', { schema: 'dbo' })
export class ButtonTranslation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ButtonTranslationID',
    default: () => 'newsequentialid()',
  })
  buttonTranslationId!: string;

  @Column('int', { name: 'Language', default: () => '(0)' })
  language!: number;

  @Column('nvarchar', { name: 'Value', length: 4000 })
  value!: string;

  @ManyToOne(() => Button, (button) => button.buttonTranslations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ButtonID', referencedColumnName: 'buttonId' }])
  button!: Button;
}
