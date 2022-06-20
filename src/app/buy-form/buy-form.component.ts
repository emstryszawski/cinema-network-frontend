import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataLoaderService} from "../common/service/data-loader.service";
import {DataSenderService} from "../common/service/data-sender.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {

  public correlationId: number;

  constructor(private dataLoaderService: DataLoaderService,
              private dataSenderService: DataSenderService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.correlationId = history.state.data
  }

  onSubmit(form: NgForm) {
    let deliveryMethod = form.value.deliveryMethod;
    let paymentMethod = form.value.paymentMethod;
    this.dataSenderService.addBuy(deliveryMethod, paymentMethod, this.correlationId);
    this.router.navigate(['/'], {state: {data: this.correlationId}});
  }
}
