import { Column, Entity, Index } from 'typeorm';

@Index('PK_VideoCapture', ['videoCaptureId'], { unique: true })
@Entity('VideoCapture', { schema: 'dbo' })
export class VideoCapture {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'VideoCaptureID',
    default: () => 'newsequentialid()',
  })
  videoCaptureId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'VideoDate' })
  videoDate!: Date;

  @Column('int', { name: 'Action' })
  action!: number;

  @Column('int', { name: 'TerminalNumber' })
  terminalNumber!: number;

  @Column('int', { name: 'EmpID' })
  empId!: number;

  @Column('int', { name: 'CheckNumber' })
  checkNumber!: number;

  @Column('int', { name: 'SupervisorID' })
  supervisorId!: number;

  @Column('int', { name: 'Data1' })
  data1!: number;

  @Column('int', { name: 'Data2' })
  data2!: number;

  @Column('int', { name: 'DeviceIndex' })
  deviceIndex!: number;

  @Column('bit', { name: 'IsCompressed' })
  isCompressed!: boolean;

  @Column('bit', { name: 'FirstFrame' })
  firstFrame!: boolean;

  @Column('bit', { name: 'LastFrame' })
  lastFrame!: boolean;

  @Column('int', { name: 'FrameRate' })
  frameRate!: number;

  @Column('int', { name: 'CompressedBytes' })
  compressedBytes!: number;

  @Column('int', { name: 'UncompressedBytes' })
  uncompressedBytes!: number;

  @Column('varbinary', { name: 'Frame' })
  frame!: Buffer;
}
