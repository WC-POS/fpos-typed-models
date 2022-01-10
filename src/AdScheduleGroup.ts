import { Column, Entity, Index } from 'typeorm';

@Index('PK_AdScheduleGroup', ['groupId'], { unique: true })
@Entity('AdScheduleGroup', { schema: 'dbo' })
export class AdScheduleGroup {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'GroupID',
    default: () => 'newsequentialid()',
  })
  groupId!: string;

  @Column('uniqueidentifier', { name: 'DisplayID' })
  displayId!: string;

  @Column('uniqueidentifier', { name: 'ObjectID' })
  objectId!: string;

  @Column('datetime', { name: 'StartTime', nullable: true })
  startTime!: Date | null;

  @Column('datetime', { name: 'EndTime', nullable: true })
  endTime!: Date | null;

  @Column('bit', { name: 'IsEnabled' })
  isEnabled!: boolean;

  @Column('int', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('int', { name: 'Priority', default: () => '(0)' })
  priority!: number;

  @Column('bit', { name: 'ByRange', default: () => "'True'" })
  byRange!: boolean;
}
