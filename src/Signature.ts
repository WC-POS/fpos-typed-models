import { Column, Entity, Index } from 'typeorm';

@Index('PK_Signature', ['signatureId'], { unique: true })
@Entity('Signature', { schema: 'dbo' })
export class Signature {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'SignatureID',
    default: () => 'newsequentialid()',
  })
  signatureId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'SuspendNumber' })
  suspendNumber!: number;

  @Column('datetime', { name: 'SignatureDate' })
  signatureDate!: Date;

  @Column('int', { name: 'CardIndex' })
  cardIndex!: number;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('int', { name: 'MinX' })
  minX!: number;

  @Column('int', { name: 'MaxX' })
  maxX!: number;

  @Column('int', { name: 'MinY' })
  minY!: number;

  @Column('int', { name: 'MaxY' })
  maxY!: number;

  @Column('int', { name: 'ElementCount' })
  elementCount!: number;

  @Column('int', { name: 'Amount' })
  amount!: number;

  @Column('varbinary', { name: 'Data' })
  data!: Buffer;

  @Column('int', { name: 'DataType', default: () => '(0)' })
  dataType!: number;
}
