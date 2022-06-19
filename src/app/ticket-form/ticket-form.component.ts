import {Component, OnInit} from '@angular/core';
import {DataLoaderService} from "../common/service/data-loader.service";
import {TicketTypeDiscount} from "../common/model/ticket-type-discount.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  public ticketDiscounts: TicketTypeDiscount[] = [];

  constructor(private dataLoaderService: DataLoaderService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.snapshot.paramMap.get('correlationId')

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
}
