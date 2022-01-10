import { Column, Entity, Index } from 'typeorm';

@Index('PK_TerminalConfiguration', ['terminalConfigurationId'], {
  unique: true,
})
@Entity('TerminalConfiguration', { schema: 'dbo' })
export class TerminalConfiguration {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'TerminalConfigurationID',
    default: () => 'newsequentialid()',
  })
  terminalConfigurationId!: string;

  @Column('smallint', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('datetime', { name: 'LastUpdate' })
  lastUpdate!: Date;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('ntext', { name: 'ConfigurationXML', nullable: true })
  configurationXml!: string | null;
}
