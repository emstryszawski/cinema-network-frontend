import {Cinema} from "./cinema.model";
import {ScreeningRoom} from "./screening-room.model";
import {Movie} from "./movie.model";
import {Ticket} from "./ticket.model";

export class Repertoire {
  public id: number;
  public screeningType: string;
  public startDateTime: Date;
  public endDateTime: Date;
  public dayOfTheWeek: string;
  public language: string;
  public subtitles: boolean;
  public dubbing: boolean;
  public lector: boolean;
  public bookingPossible: boolean;
  public cinema: Cinema
  public screeningRoom: ScreeningRoom
  public movie: Movie
  public tickets: Set<Ticket>
}
