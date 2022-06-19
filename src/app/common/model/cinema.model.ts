import {ScreeningRoom} from "./screening-room.model";
import {Repertoire} from "./repertoire.model";
import {Ticket} from "./ticket.model";

export class Cinema {
  public id: number;
  public name: string;
  public city: string;
  public postCode: string;
  public street: string;
  public screeningRooms: Set<ScreeningRoom>;
  public repertoires: Set<Repertoire>;
  public tickets: Set<Ticket>
}
