import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MessageEmployee } from './MessageEmployee';

@Index('PK_Message', ['messageId'], { unique: true })
@Entity('Message', { schema: 'dbo' })
export class Message {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MessageID',
    default: () => 'newsequentialid()',
  })
  messageId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('nvarchar', { name: 'MessageName', length: 20 })
  messageName!: string;

  @Column('bit', { name: 'IsRepetitive' })
  isRepetitive!: boolean;

  @Column('bit', { name: 'ShowAtClockIn' })
  showAtClockIn!: boolean;

  @Column('bit', { name: 'ShowAtSignOn' })
  showAtSignOn!: boolean;

  @Column('datetime', { name: 'MessageDate' })
  messageDate!: Date;

  @Column('nvarchar', { name: 'MessageText', length: 468 })
  messageText!: string;

  @Column('datetime', { name: 'MessageStartDate' })
  messageStartDate!: Date;

  @Column('int', { name: 'EmployeeCount', default: () => '(0)' })
  employeeCount!: number;

  @Column('bit', { name: 'SendTextEmail', default: () => '(0)' })
  sendTextEmail!: boolean;

  @Column('bit', { name: 'TextEmailSent', default: () => '(0)' })
  textEmailSent!: boolean;

  @OneToMany(
    () => MessageEmployee,
    (messageEmployee) => messageEmployee.message
  )
  messageEmployees!: MessageEmployee[];
}
