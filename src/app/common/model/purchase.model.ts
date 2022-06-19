import {Ticket} from "./ticket.model";

export class Purchase {
  public id: number;
  public purchaseDate: Date;
  public price: number;
  // public customer: Customer; // TODO
  // public buy: Buy; // TODO
  public tickets: Set<Ticket>;
  // public booking: Booking; // TODO
}
