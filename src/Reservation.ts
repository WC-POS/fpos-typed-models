import { Column, Entity, Index } from 'typeorm';

@Index('IX_Reservation_Store_Date', ['storeId', 'reservationDate'], {})
@Index('PK_Reservation', ['reservationId'], { unique: true })
@Entity('Reservation', { schema: 'dbo' })
export class Reservation {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'ReservationID',
    default: () => 'newsequentialid()',
  })
  reservationId!: string;

  @Column('int', { name: 'StoreID' })
  storeId!: number;

  @Column('datetime', { name: 'ReservationDate' })
  reservationDate!: Date;

  @Column('int', { name: 'CustomerNumber' })
  customerNumber!: number;

  @Column('smallint', { name: 'TableNumber' })
  tableNumber!: number;

  @Column('smallint', { name: 'MinutesPrior' })
  minutesPrior!: number;

  @Column('smallint', { name: 'GuestCount' })
  guestCount!: number;

  @Column('nvarchar', { name: 'CustomerName', nullable: true, length: 64 })
  customerName!: string | null;

  @Column('nvarchar', { name: 'Note', nullable: true, length: 20 })
  note!: string | null;

  @Column('bit', { name: 'HasArrived', default: () => '(0)' })
  hasArrived!: boolean;

  @Column('int', { name: 'ArriveTime' })
  arriveTime!: number;

  @Column('nvarchar', { name: 'LongNote', nullable: true, length: 512 })
  longNote!: string | null;

  @Column('smallint', { name: 'Duration', default: () => '(0)' })
  duration!: number;

  @Column('bit', { name: 'HasBeenSeated', default: () => '(0)' })
  hasBeenSeated!: boolean;

  @Column('int', { name: 'HasBeenSeatedTime', default: () => '(0)' })
  hasBeenSeatedTime!: number;
}
