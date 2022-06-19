import {Ticket} from "./ticket.model";

export class TicketTypeDiscount {
  public id: number;
  public name: string;
  public discountValue: number;
  public tickets: Set<Ticket>
}
