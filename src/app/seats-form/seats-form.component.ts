import { Component, OnInit } from '@angular/core';
import {Seat} from "../common/model/seat.model";
import {DataLoaderService} from "../common/service/data-loader.service";
import {DataSenderService} from "../common/service/data-sender.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seats-form',
  templateUrl: './seats-form.component.html',
  styleUrls: ['./seats-form.component.css']
})
export class SeatsFormComponent implements OnInit {
  public seats: Seat[] = [];
  public chosenSeats: Seat[] = [];
  public correlationId: number;

  constructor(private dataLoaderService: DataLoaderService,
              private dataSenderService: DataSenderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataLoaderService.findAllSeats()
      .subscribe(data => {
        this.seats = data
      })
    this.correlationId = history.state.data
  }

  markSeatAsChosen(seat: Seat) {
    this.chosenSeats.push(seat);
    console.log(this.chosenSeats);
  }

  sendSeatsToServer() {
    let ids = this.chosenSeats.map(seat => seat.id);
    this.dataSenderService.addSeats(ids, this.correlationId);
    this.router.navigate(['/customer'], { state: {data: this.correlationId }});
  }
}
