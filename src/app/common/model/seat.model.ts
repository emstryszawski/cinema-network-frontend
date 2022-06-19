import {ScreeningRoom} from "./screening-room.model";
import {SeatBooking} from "./seat-booking.model";

export class Seat {
  public id: number;
  public screeningRoom: ScreeningRoom;
  public seatNumber: number;
  public rowNumber: number;
  public seatBookings: Set<SeatBooking>
}
