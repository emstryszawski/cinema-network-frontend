import {ScreeningRoom} from "./screening-room.model";

export class Seat {
  public id: number;
  public screeningRoom: ScreeningRoom;
  public seatNumber: number;
  public rowNumber: number;
}
