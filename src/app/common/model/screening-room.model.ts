import {Cinema} from "./cinema.model";
import {Seat} from "./seat.model";
import {Repertoire} from "./repertoire.model";

export class ScreeningRoom {
  public id: number;
  public roomNumber: number;
  public cinema: Cinema;
  public rowsNumber: number;
  public seatsNumber: number;
  public seats: Set<Seat>
  public repertoires: Set<Repertoire>
}
