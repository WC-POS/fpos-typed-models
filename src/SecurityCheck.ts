import { Column, Entity, Index } from 'typeorm';

@Index('PK_SecurityCheck2', ['securityCheckId'], { unique: true })
@Entity('SecurityCheck', { schema: 'dbo' })
export class SecurityCheck {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SecurityCheckID',
    default: () => 'newsequentialid()',
  })
  securityCheckId!: string;

  @Column('int', { name: 'Type', default: () => '(0)' })
  type!: number;

  @Column('binary', { name: 'Path', nullable: true, length: 128 })
  path!: Buffer | null;

  @Column('binary', { name: 'FileName', nullable: true, length: 48 })
  fileName!: Buffer | null;
}
