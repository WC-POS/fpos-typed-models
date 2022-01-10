import { Column, Entity, Index } from 'typeorm';

@Index('PK_LocalSuspend', ['terminalNumber'], { unique: true })
@Entity('LocalSuspend', { schema: 'dbo' })
export class LocalSuspend {
  @Column('int', { primary: true, name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'LastSuspendNumber', default: () => '(0)' })
  lastSuspendNumber!: number;
}
