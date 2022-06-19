import {Seat} from "./seat.model";
import {Ticket} from "./ticket.model";

export class SeatBooking {
  public id: number;
  public seat: Seat;
  public availability: string;
  public startDate: Date;
  public tickets: Set<Ticket>
}
