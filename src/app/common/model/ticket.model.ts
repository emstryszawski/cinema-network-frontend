import {Cinema} from "./cinema.model";
import {Repertoire} from "./repertoire.model";
import {Purchase} from "./purchase.model";
import {TicketTypeDiscount} from "./ticket-type-discount.model";
import {SeatBooking} from "./seat-booking.model";

export class Ticket {
  public id: number;
  public cinema: Cinema;
  public repertoire: Repertoire;
  public purchase: Purchase;
  public ticketTypeDiscount: TicketTypeDiscount;
  public seatBooking: SeatBooking;
}
