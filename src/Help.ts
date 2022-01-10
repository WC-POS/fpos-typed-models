import { Column, Entity, Index } from 'typeorm';

@Index('PK_Help', ['helpId'], { unique: true })
@Entity('Help', { schema: 'dbo' })
export class Help {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'HelpID',
    default: () => 'newsequentialid()',
  })
  helpId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('nvarchar', { name: 'HelpName', length: 20 })
  helpName!: string;

  @Column('nvarchar', { name: 'HelpText', length: 2021 })
  helpText!: string;
}
