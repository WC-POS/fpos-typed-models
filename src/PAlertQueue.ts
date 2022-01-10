import { Column, Entity, Index } from 'typeorm';

@Index('PK_PAlertQueue', ['alertQueueId'], { unique: true })
@Entity('PAlertQueue', { schema: 'dbo' })
export class PAlertQueue {
  @Column('uniqueidentifier', { primary: true, name: 'AlertQueueID' })
  alertQueueId!: string;

  @Column('uniqueidentifier', { name: 'AlertID' })
  alertId!: string;

  @Column('datetime', { name: 'QueueDate' })
  queueDate!: Date;

  @Column('nvarchar', { name: 'Email', length: 100 })
  email!: string;

  @Column('nvarchar', { name: 'Subject', length: 200 })
  subject!: string;

  @Column('nvarchar', { name: 'Body' })
  body!: string;

  @Column('int', { name: 'RetryCount' })
  retryCount!: number;

  @Column('bit', { name: 'IsSent' })
  isSent!: boolean;

  @Column('varbinary', { name: 'Attachment', nullable: true })
  attachment!: Buffer | null;

  @Column('nvarchar', { name: 'FileName', nullable: true, length: 254 })
  fileName!: string | null;

  @Column('nvarchar', { name: 'AltBodyText', nullable: true })
  altBodyText!: string | null;

  @Column('nvarchar', { name: 'AltBodyMimeType', nullable: true, length: 100 })
  altBodyMimeType!: string | null;
}
