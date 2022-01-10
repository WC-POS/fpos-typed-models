import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Message } from './Message';

@Index('IX_MessageEmployee', ['messageId'], {})
@Index('PK_MessageEmployee', ['messageEmployeeId'], { unique: true })
@Entity('MessageEmployee', { schema: 'dbo' })
export class MessageEmployee {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MessageEmployeeID',
    default: () => 'newsequentialid()',
  })
  messageEmployeeId!: string;

  @Column('uniqueidentifier', { name: 'MessageID' })
  messageId!: string;

  @Column('int', { name: 'MessageEmployeeIndex', default: () => '(0)' })
  messageEmployeeIndex!: number;

  @Column('int', { name: 'EmployeeID' })
  employeeId!: number;

  @ManyToOne(() => Message, (message) => message.messageEmployees, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'MessageID', referencedColumnName: 'messageId' }])
  message!: Message;
}
