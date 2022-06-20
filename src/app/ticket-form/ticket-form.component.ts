import {Component, OnInit} from '@angular/core';
import {DataLoaderService} from "../common/service/data-loader.service";
import {TicketTypeDiscount} from "../common/model/ticket-type-discount.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DataSenderService} from "../common/service/data-sender.service";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  public ticketDiscounts: TicketTypeDiscount[] = [];
  public correlationId: number;

  constructor(private dataLoaderService: DataLoaderService,
              private router: Router,
              private dataSenderService: DataSenderService) {
  }

  ngOnInit(): void {
    this.dataSenderService.createPurchase().subscribe(data => {
      this.correlationId = data.correlationId;
    });

    this.dataLoaderService.findAllTicketDiscounts()
      .subscribe((data) => {
        data.map((element) => {
          element.quantity = 0
        });
        this.ticketDiscounts = data;
      });
  }

  public plus(discount: TicketTypeDiscount) {
    if (discount.quantity != 4) {
      discount.quantity++;
    }
  }

  public minus(discount: TicketTypeDiscount) {
    if (discount.quantity != 0) {
      discount.quantity--;
    }
  }

  public sendTicketsToServer() {
    let ticketsToAdd: TicketTypeDiscount[] = [];
    this.ticketDiscounts.forEach(element => {
      if (element.quantity > 0) {
        ticketsToAdd.push(element);
      }
    });
    ticketsToAdd.forEach(element => {
      this.dataSenderService.addTickets(element.id, element.quantity, this.correlationId);
    })
    this.router.navigate(['/seats'], { state: {data: this.correlationId}})
  }
}
